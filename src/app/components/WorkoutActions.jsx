"use client";

import { usePlan } from "../context/PlanContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => {
          console.log("ADD BUTTON CLICKED", workout);
          addToPlan(workout);
        }}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-4 text-xs font-black uppercase text-black"
      >
        <span className="text-lg">＋</span>
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => {
          console.log("SAVE BUTTON CLICKED", workout);
          saveForLater(workout);
        }}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#292b31] bg-[#17181d] px-5 py-4 text-xs font-black uppercase text-white"
      >
        <span className="text-lg">♡</span>
        Save for later
      </button>
    </div>
  );
}
