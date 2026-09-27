import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 px-8 py-5">
      {/* Logo */}
    
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <span className="text-xl font-bold">FITLOG</span>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="/workout">Workout</Link>

        <Link href="/my-plan">My Plan</Link>
      </div>
      {/* Status Badges */}
      <div className="flex items-center gap-3">
        {/* Plan Badge */}
        <div className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-semibold text-black">
          Plan 3
        </div>

        {/* Saved Badge */}
        <div className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-semibold">
          Saved 5
        </div>
      </div>
    </nav>
  );
}
