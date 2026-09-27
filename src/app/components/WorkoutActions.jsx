"use client";

import { usePlan } from "../context/PlanContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add to today's plan */}
      <button
        onClick={() => addToPlan(workout)}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-4 text-xs font-black uppercase text-black transition hover:bg-[#b8e600]"
      >
        <span className="text-lg">＋</span>
        Add to today&apos;s plan
      </button>

      {/* Save for later */}
      <button
        onClick={() => saveForLater(workout)}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#292b31] bg-[#17181d] px-5 py-4 text-xs font-black uppercase text-white transition hover:border-[#ccff00]"
      >
        <span className="text-lg">♡</span>
        Save for later
      </button>
    </div>
  );
}
