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
      <section className="mx-auto max-w-[1200px]">
        {/* Back */}
        <Link
          href="/workout"
          className="mb-6 inline-block text-sm text-gray-400 transition hover:text-[#ccff00]"
        >
          ← Back to Library
        </Link>

        {/* ================= MAIN TWO COLUMN ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* ================= LEFT : IMAGE ================= */}
          <div className="relative h-[500px] overflow-hidden rounded-xl border border-[#292b31] bg-[#17181d] lg:h-[700px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* ================= RIGHT : DETAILS ================= */}
          <div>
            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Category Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= KEY SPECS ================= */}
            <div className="mt-8">
              <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-white">
                Key Specs
              </h2>

              <div className="overflow-hidden rounded-lg border border-[#292b31] bg-[#17181d]">
                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Equipment
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Difficulty
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Sets
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Reps
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Duration
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-[#292b31] px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Calories
                  </span>

                  <span className="text-sm font-bold text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Rating
                  </span>

                  <span className="text-sm font-bold text-white">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-8">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 border-b border-[#292b31] pb-4"
                  >
                    {/* Number */}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#ccff00] text-[10px] font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Instruction */}
                    <p className="text-sm leading-6 text-gray-400">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary */}
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-4 text-xs font-black uppercase text-black transition hover:bg-[#b8e600]"
              >
                <span className="text-lg">＋</span>
                Add to today&apos;s plan
              </button>

              {/* Secondary */}
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#292b31] bg-[#17181d] px-5 py-4 text-xs font-black uppercase text-white transition hover:border-[#ccff00]"
              >
                <span className="text-lg">♡</span>
                Save for later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
