import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">
          CSCI 331 - Assignment 7
        </h1>

        <div className="grid gap-6 max-w-md mx-auto">
          <Link
            href="/counter"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors block"
          >
            Counter App
          </Link>

          <Link
            href="/github"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors block"
          >
            GitHub Page
          </Link>

          <Link
            href="/store"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors block"
          >
            Store Page
          </Link>
        </div>
      </div>
    </div>
  );
}
