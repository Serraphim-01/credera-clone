import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-credera-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-credera-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-credera-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-credera-red text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors duration-200 font-semibold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}