import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-widest text-[#ccff00]">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-md bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
