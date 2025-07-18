import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong!</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
