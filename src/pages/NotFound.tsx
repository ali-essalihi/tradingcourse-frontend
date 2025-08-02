import { useTitle } from "../hooks/useTitle";

export default function NotFound() {
  useTitle("Page Not Found (404)");
  return (
    <div className="text-center max-w-2xl mx-auto my-16 px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
        404
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        The page you're looking for doesn't exist. Please check the URL or return to the homepage.
      </p>
    </div>
  );
}
