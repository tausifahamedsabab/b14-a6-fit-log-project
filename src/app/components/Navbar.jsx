"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const { plan, saved } = usePlan();

  return (
    <nav className="flex h-[70px] items-center justify-between border-b border-[#1d1e22] bg-[#0b0c0e] px-7">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="FITLOG Logo" width={28} height={28} />

        <span className="text-[15px] font-bold tracking-wide text-white">
          FITLOG
        </span>
      </Link>

      {/* Center Navigation */}
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
        <Link
          href="/workout"
          className="rounded-full bg-[#17200b] px-4 py-2 text-[12px] font-medium text-[#ccff00]"
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className="rounded-full px-4 py-2 text-[12px] text-gray-400 transition hover:text-white"
        >
          My Plan
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 text-[12px]">
        {/* Plan */}
        <Link href="/my-plan" className="flex items-center gap-2 text-gray-300">
          <span>Plan</span>

          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-bold text-black">
            {plan.length}
          </span>
        </Link>

        {/* Saved */}
        <Link href="/my-plan" className="flex items-center gap-2 text-gray-300">
          <span>Saved</span>

          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px] text-gray-400">
            {saved.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}
