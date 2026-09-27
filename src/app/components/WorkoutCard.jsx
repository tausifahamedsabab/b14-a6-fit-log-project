import Image from "next/image";
import Link from "next/link";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="card w-full cursor-pointer overflow-hidden border border-[#292b31] bg-[#17181d] shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#ccff00]">
        {/* Workout Image */}
        <figure className="relative h-48 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4">
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

          {/* Workout Name */}
          <h2 className="mt-1 text-sm font-black uppercase text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-[10px] text-gray-500">{workout.equipment}</p>

          {/* Divider */}
          <div className="my-2 border-t border-[#25272d]" />

          {/* Stats */}
          <div className="flex items-center justify-between text-[10px] text-gray-400">
            <span>◷ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>☆ {workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
