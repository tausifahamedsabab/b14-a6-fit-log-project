import Banner from "@/app/components/Banner";
import WorkoutCard from "@/app/components/WorkoutCard";
import workouts from "@/app/data/workouts.json";

export default function WorkoutPage() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10">
      <section className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-black uppercase text-white">
            THE LIBRARY
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </main>
  );
}
