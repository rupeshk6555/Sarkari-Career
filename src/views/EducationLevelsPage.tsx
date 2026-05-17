"use client";

import Link from "next/link";
import { ChevronRight, GraduationCap, Search } from "lucide-react";
import { educationLevels } from "@/data/education";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

export function EducationLevelsPage() {
  return (
    <div className="min-h-screen pt-16 bg-off-white overflow-hidden relative">
      {/* Page Background Mesh */}
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />

      {/* Hero Banner */}
      <section className="relative bg-navy py-12 md:py-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-slate-custom mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Education Levels</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Jobs by Education
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-slate-custom max-w-2xl">
              Find government jobs based on your educational qualification.
              Whether you are a 10th pass or a postgraduate, we have
              opportunities for everyone.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-6 max-w-lg">
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl h-12 sm:h-14 px-1.5 sm:px-2 group hover:bg-white/15 transition-all duration-300 focus-within:bg-white/20 focus-within:border-white/40 focus-within:ring-4 focus-within:ring-brand/30">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 ml-3 sm:ml-4 shrink-0 transition-colors group-focus-within:text-white" />
                <input
                  type="text"
                  placeholder="Search by qualification..."
                  className="flex-1 min-w-0 px-2 sm:px-4 text-sm sm:text-base text-white placeholder:text-white/50 outline-none bg-transparent"
                />
                <button className="bg-brand hover:bg-brand-hover text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 shrink-0 hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education Levels Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <SectionHeader
            label="🎓 QUALIFICATIONS"
            heading="Browse by Education Level"
          />

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {educationLevels.map((edu) => (
              <StaggerItem key={edu.slug}>
                <Link
                  href={`/${edu.slug}`}
                  className="group block bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] ring-1 ring-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />
                  <div className="flex items-start justify-between mb-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:rotate-3 transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* <span className="bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-full">
                      {edu.count} Jobs
                    </span> */}
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-2 group-hover:text-brand transition-colors relative z-10">
                    {edu.label}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 relative z-10 line-clamp-2">
                    {edu.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="text-sm font-bold text-brand flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Jobs <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
