"use client";
import * as THREE from 'three';
import React, { useEffect, Suspense, useRef } from 'react';
import { useFrame, ThreeElements, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import model from "@blender/stamp/stamp.glb";
export default function Box(props: ThreeElements['mesh']) {
  const state = useThree();
  const gltf = useLoader(GLTFLoader, model);
  let mixer = useRef<THREE.AnimationMixer>(new THREE.AnimationMixer(gltf.scene));
  useEffect(() => {
    state.gl.setClearColor("#000000");
    state.camera.position.set(0, 0, 30);
    const o = new OrbitControls(state.camera, state.gl.domElement);
    o.maxDistance = 75;
    o.update();
    if ("scene" in gltf) {
      const scale = 250;
      const animations = gltf.animations;

      gltf.scene.scale.set(scale, scale, scale);
      if (animations && animations.length) {

        //全てのAnimation Clipに対して
        for (let i = 0; i < animations.length; i++) {
          let animation = animations[i];

          //Animation Actionを生成
          let action = mixer.current.clipAction(animation);

          //ループ設定（1回のみ）
          action.setLoop(THREE.LoopOnce, 10000);

          //アニメーションの最後のフレームでアニメーションが終了
          action.clampWhenFinished = true;

          //アニメーションを再生
          action.play();
        }
      }
    }
  }, [gltf]);
  useFrame((state, delta) => {
    if ("scene" in gltf) {
      //Animation Mixerを実行
      if (mixer.current) {
        mixer.current.update(delta);
      }
    }
  });
  return (
    <>
      <ambientLight intensity={0.33} />
      <pointLight intensity={0.33} position={[100, 100, 100]} />
      <Suspense fallback={null}>
        <primitive object={(gltf as GLTF).scene} />
      </Suspense>
    </>
  );
}