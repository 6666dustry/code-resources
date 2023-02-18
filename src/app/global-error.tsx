'use client';
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  return (
    <html lang="en">
      <head />
      <body>
        <h2>Something went wrong!</h2>
        <p>error:{error.message}</p>
        <button type="submit" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}