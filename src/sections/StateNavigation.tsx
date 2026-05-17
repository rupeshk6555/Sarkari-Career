import { MapPin } from "lucide-react";
import { states } from "@/data/states";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import Link from "next/link";

export function StateNavigation() {
  return (
    <section className="py-16 md:py-20 bg-linear-to-b from-white to-slate-50/80 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          label="BROWSE BY STATE"
          heading="Find Jobs in Your State"
        />

        <StaggerContainer
          staggerDelay={0.04}
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4 mt-8"
        >
          {states.map((state) => (
            <StaggerItem key={state.code}>
              <Link
                href={`/${state.name
                  .toLowerCase()
                  .replace(/[^a-z0-9 ]/g, "")
                  .replace(/\s+/g, "-")}`}
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white ring-1 ring-slate-100 hover:bg-linear-to-br hover:from-brand hover:to-brand-hover hover:text-white hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <MapPin className="w-3.5 h-3.5 text-brand group-hover:text-white shrink-0 transition-colors" />
                <span className="truncate">{state.code}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
