"use client";

import { usePlan } from "../context/PlanContext";

export default function WorkoutActions({ workout }) {
  const { plan, addToPlan, saveForLater } = usePlan();

  const isPlanFull = plan.length >= 5;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isPlanFull}
        className={`flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-4 text-xs font-black uppercase ${
          isPlanFull
            ? "cursor-not-allowed bg-[#292b31] text-gray-500"
            : "bg-[#ccff00] text-black transition hover:bg-[#b8e600]"
        }`}
      >
        <span className="text-lg">＋</span>
        {isPlanFull ? "Today's plan is full" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#292b31] bg-[#17181d] px-5 py-4 text-xs font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        <span className="text-lg">♡</span>
        Save for later
      </button>
    </div>
  );
}
