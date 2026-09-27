import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#292b31] bg-[#0b0c0e]">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FITLOG"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />

          <span className="text-lg font-black tracking-tight text-white">
            FITLOG
          </span>
        </div>

        <p className="text-right text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
