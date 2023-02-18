/* {
  "extends": "next/core-web-vitals"
}*/
require('eslint-config-molindo/setupPlugins');

module.exports = {
  extends: [
    'molindo/react',
    'next/core-web-vitals'
  ],
  rules: {
    "css-modules/no-undef-class": "off",
    "css-modules/no-unused-class": "off",
    "react/jsx-sort-props": "off",
    'react/react-in-jsx-scope': 'off',
  }
};
