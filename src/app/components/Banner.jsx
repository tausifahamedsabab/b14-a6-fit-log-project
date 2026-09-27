import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10">
      <div className="relative mx-auto flex min-h-[620px] max-w-[1200px] flex-col justify-between overflow-hidden rounded-xl border border-[#24262c] bg-[#15161b] px-6 py-8 sm:min-h-[560px] sm:px-10 sm:py-10 md:min-h-[430px] md:px-12 md:py-12 lg:min-h-[365px]">
        {/* Left Content */}
        <div className="relative z-10 max-w-full sm:max-w-[550px]">
          <p className="mb-5 text-xs font-bold tracking-[2px] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
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
        <div className="relative mx-auto mt-8 h-[230px] w-[250px] shrink-0 sm:h-[250px] sm:w-[280px] md:absolute md:right-6 md:top-1/2 md:mt-0 md:h-[300px] md:w-[320px] md:-translate-y-1/2 lg:right-8 lg:h-[330px] lg:w-[350px]">
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
