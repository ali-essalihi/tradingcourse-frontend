import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="text-center max-w-2xl mx-auto px-4 my-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Something Went{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
          Wrong
        </span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">An unexpected error occurred.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
}
