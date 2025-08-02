import { useTitle } from "../hooks/useTitle";

export default function AuthError() {
  useTitle("Authentication Failed");
  return (
    <div role="alert" className="text-center max-w-2xl mx-auto px-4 my-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Authentication{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
          Failed
        </span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        We couldn't sign you in. Please try again.
      </p>
    </div>
  );
}
