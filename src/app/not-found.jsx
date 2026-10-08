import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#15171d] px-4 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 bg-white text-black hover:bg-gray-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
