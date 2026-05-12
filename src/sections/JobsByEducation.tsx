import { educationLevels } from "@/data/education";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function JobsByEducation() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-2xl p-5 relative overflow-hidden group">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <h4 className="text-[13px] font-black text-dark-text uppercase tracking-wide">
          🎓 Govt Jobs by Education
        </h4>
        <Link
          href="/education-levels"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-brand hover:bg-brand-hover px-2.5 py-1 rounded-full shadow-sm shadow-brand/30 transition-all duration-200 hover:-translate-y-px"
        >
          All
        </Link>
      </div>

      {/* Vertical list of education levels */}
      <ul className="space-y-0.5 relative z-10">
        {educationLevels.map((edu) => (
          <li key={edu.slug}>
            <Link
              href={`/${edu.slug}`}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12.5px] font-medium text-slate-600 hover:text-brand hover:bg-brand/5 transition-all duration-200 group/item"
            >
              <ChevronRight className="w-3 h-3 text-brand shrink-0 group-hover/item:translate-x-0.5 transition-transform duration-200" />
              {edu.label} Government Jobs
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
