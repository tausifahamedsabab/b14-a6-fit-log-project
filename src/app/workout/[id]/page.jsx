import Image from "next/image";
import Link from "next/link";
import workouts from "@/app/data/workouts.json";

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;

  const workout = workouts.find((item) => item.id.toString() === id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0b0c0e] px-6 py-20 text-center">
        <h1 className="text-3xl font-black text-white">WORKOUT NOT FOUND</h1>

        <Link
          href="/workout"
          className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
        >
          BACK TO LIBRARY
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10">
      <section className="mx-auto max-w-[1000px]">
        {/* Back */}
        <Link
          href="/workout"
          className="mb-6 inline-block text-sm text-gray-400 hover:text-[#ccff00]"
        >
          ← Back to Library
        </Link>

        {/* Main Detail Card */}
        <div className="overflow-hidden rounded-xl border border-[#292b31] bg-[#17181d]">
          {/* Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="mt-4 text-4xl font-black uppercase text-white">
              {workout.name}
            </h1>

            {/* Equipment */}
            <p className="mt-2 text-gray-500">{workout.equipment}</p>

            {/* Difficulty */}
            <p className="mt-2 text-sm text-gray-400">
              Difficulty: {workout.difficulty}
            </p>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>◷ {workout.duration} min</span>

              <span>🔥 {workout.caloriesBurned} kcal</span>

              <span>☆ {workout.rating}</span>

              <span>
                {workout.sets} sets × {workout.reps}
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-xl font-black uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3 text-sm text-gray-400">
                {workout.instructions.map((instruction, index) => (
                  <li key={index}>
                    <span className="mr-2 font-bold text-[#ccff00]">
                      {index + 1}.
                    </span>

                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
