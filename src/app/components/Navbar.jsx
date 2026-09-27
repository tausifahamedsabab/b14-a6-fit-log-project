"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const { plan, saved } = usePlan();

  return (
    <nav className="border-b border-[#1d1e22] bg-[#0b0c0e]">
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-7">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <Image src="/logo.png" alt="FITLOG Logo" width={28} height={28} />

          <span className="text-[15px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Center Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 sm:gap-2">
          <Link
            href="/workout"
            className="rounded-full bg-[#17200b] px-3 py-2 text-[11px] font-medium text-[#ccff00] sm:px-4 sm:text-[12px]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-3 py-2 text-[11px] text-gray-400 transition hover:text-white sm:px-4 sm:text-[12px]"
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-3 text-[11px] sm:gap-6 sm:text-[12px]">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-300 transition hover:text-white sm:gap-2"
          >
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-300 transition hover:text-white sm:gap-2"
          >
            <span>Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px] text-gray-400">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
