"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "../context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");

  const workouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10">
      <section className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-black uppercase text-white">My Plan</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your planned and saved workouts.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-2 border-b border-[#292b31]">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 text-xs font-black uppercase transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            today&apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 text-xs font-black uppercase transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {/* Empty State */}
        {workouts.length === 0 ? (
          <div className="mt-10 rounded-xl border border-[#292b31] bg-[#17181d] px-6 py-16 text-center">
            <h2 className="text-xl font-black uppercase text-white">
              {activeTab === "plan"
                ? "No workouts in today's plan"
                : "No saved workouts"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {activeTab === "plan"
                ? "Add workouts from the workout library."
                : "Save workouts that you want to try later."}
            </p>

            <Link
              href="/workout"
              className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          /* Workout Cards */
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-xl border border-[#292b31] bg-[#17181d]"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Muscle Groups */}
                  <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-full bg-[#ccff00] px-2 py-1 text-[9px] font-black uppercase text-black"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  {/* Name */}
                  <h2 className="mt-3 text-lg font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  {/* Stats */}
                  <div className="mt-3 flex justify-between text-[10px] text-gray-500">
                    <span>◷ {workout.duration} min</span>

                    <span>🔥 {workout.caloriesBurned} kcal</span>

                    <span>★ {workout.rating}</span>
                  </div>

                  {/* View Details */}
                  <Link
                    href={`/workout/${workout.id}`}
                    className="mt-5 block rounded-md border border-[#292b31] px-4 py-3 text-center text-xs font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
