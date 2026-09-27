"use client";

import { useEffect, useState } from "react";
import Banner from "@/app/components/Banner";
import WorkoutCard from "@/app/components/WorkoutCard";
import workoutsData from "@/app/data/workouts.json";

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWorkouts(workoutsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Banner />

      <main className="min-h-screen bg-[#0b0c0e] px-6 py-10">
        <section className="mx-auto max-w-[1200px]">
          <div>
            <h1 className="text-2xl font-black uppercase text-white">
              THE LIBRARY
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#292b31] border-t-[#ccff00]" />
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
