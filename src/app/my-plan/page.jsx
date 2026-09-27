"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "../context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved, loading, removeFromPlan, removeFromSaved } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const exercises = currentWorkouts.length;

  const minutes = currentWorkouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );

  const calories = currentWorkouts.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10">
      <section className="mx-auto max-w-[1200px]">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[#292b31] bg-[#17181d] p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-white">{exercises}</p>
          </div>

          <div className="rounded-lg border border-[#292b31] bg-[#17181d] p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-white">{minutes}</p>
          </div>

          <div className="rounded-lg border border-[#292b31] bg-[#17181d] p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-white">{calories}</p>
          </div>
        </div>

        <div className="mt-10 flex gap-6 border-b border-[#292b31]">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`pb-3 text-xs font-black uppercase transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan ({plan.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`pb-3 text-xs font-black uppercase transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <p className="text-sm font-bold text-gray-500">Loading workouts…</p>
          </div>
        ) : currentWorkouts.length === 0 ? (
          <div className="mt-10 rounded-xl border border-[#292b31] bg-[#17181d] px-6 py-20 text-center">
            <h2 className="text-2xl font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workout"
              className="mt-7 inline-block rounded-md bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black transition hover:bg-[#b8e600]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {currentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-xl border border-[#292b31] bg-[#17181d] p-4 md:flex-row md:items-center"
              >
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg md:h-28 md:w-44">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 text-[10px] text-gray-400">
                    <span>◷ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-md border border-[#292b31] px-4 py-3 text-[10px] font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => removeFromPlan(workout.id)}
                      className="rounded-md border border-[#292b31] px-4 py-3 text-[10px] font-black uppercase text-gray-400 transition hover:border-red-500 hover:text-red-500"
                    >
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(workout.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-[#292b31] text-gray-500 transition hover:border-red-500 hover:text-red-500"
                    aria-label="Remove workout"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
