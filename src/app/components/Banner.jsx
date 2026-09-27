import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="px-6 py-10">
      <div className="relative mx-auto flex min-h-[365px] max-w-[1200px] items-center overflow-hidden rounded-xl border border-[#24262c] bg-[#15161b] px-12 py-12">
        {/* Left Content */}
        <div className="relative z-10 max-w-[550px]">
          <p className="mb-5 text-xs font-bold tracking-[2px] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] text-white md:text-6xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="/workout"
            className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Image */}
        <div className="absolute right-8 top-1/2 h-[330px] w-[350px] -translate-y-1/2">
          <Image
            src="/banner.png"
            alt="Workout illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
