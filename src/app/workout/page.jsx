"use client";

import { useEffect, useState } from "react";
import Banner from "@/app/components/Banner";
import WorkoutCard from "@/app/components/WorkoutCard";
import workoutsData from "@/app/data/workouts.json";

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWorkouts(workoutsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredWorkouts = workouts.filter((workout) => {
    const search = searchTerm.toLowerCase();

    const matchesName = workout.name.toLowerCase().includes(search);

    const matchesMuscle = workout.muscleGroups.some((muscle) =>
      muscle.toLowerCase().includes(search),
    );

    return matchesName || matchesMuscle;
  });

  return (
    <>
      <Banner />

      <main className="min-h-screen bg-[#0b0c0e] px-4 py-10 sm:px-6">
        <section className="mx-auto max-w-[1200px]">
          <div>
            <h1 className="text-2xl font-black uppercase text-white">
              THE LIBRARY
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="mt-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search workouts or muscle groups..."
              className="w-full rounded-md border border-[#292b31] bg-[#17181d] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#ccff00]"
            />
          </div>

          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#292b31] border-t-[#ccff00]" />
            </div>
          ) : filteredWorkouts.length === 0 ? (
            <div className="mt-10 rounded-xl border border-[#292b31] bg-[#17181d] px-6 py-20 text-center">
              <h2 className="text-2xl font-black uppercase text-white">
                NO WORKOUTS FOUND
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Try searching with another workout name or muscle group.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorkouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
