import { Shield, FlaskConical, GraduationCap } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { featuredJobs } from "@/data/jobs";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 80);
}

const departmentIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Defence: Shield,
  Medical: FlaskConical,
  Education: GraduationCap,
};

export function TrendingJobCards() {
  return (
    <section className="py-12 md:py-16 bg-slate-50/30 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          label="🔥 TRENDING NOW"
          heading="Featured Job Alerts"
          showViewAll
          viewAllHref="/categories"
        />

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {featuredJobs.map((job, i) => {
            const DeptIcon = departmentIcons[job.department || ""] || Shield;
            return (
              <StaggerItem key={i}>
                <Link
                  href={`/post/${generateSlug(job.title)}`}
                  className="block bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-200/60 p-6 ring-1 ring-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand/5 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 h-full group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none group-hover:bg-brand/10" />
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-brand/80 to-brand-hover opacity-80 group-hover:opacity-100 transition-opacity z-20" />
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <DeptIcon className="w-5 h-5 text-brand" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-custom">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-dark-text mb-2 relative z-10">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-custom mb-3 relative z-10">
                    {job.meta}
                  </p>
                  <div className="flex items-center justify-between relative z-10">
                    <StatusBadge status={job.status} />
                    <span className="text-sm font-medium text-brand">
                      View Details →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
