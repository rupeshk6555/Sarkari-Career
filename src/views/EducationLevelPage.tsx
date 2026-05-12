"use client";

import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  ArrowLeft,
  Zap,
  Bell,
  Send,
  Phone,
} from "lucide-react";
import { educationLevels, educationJobs } from "@/data/education";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";

interface EducationLevelPageProps {
  slug: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 80);
}

export function EducationLevelPage({ slug }: EducationLevelPageProps) {
  const level = educationLevels.find((e) => e.slug === slug);
  const jobs = educationJobs[slug] || [];

  if (!level) {
    return (
      <div className="min-h-screen pt-20 bg-off-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Education Level Not Found
          </h1>
          <p className="text-slate-custom mb-6">
            The education level you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-off-white">
      {/* Hero Banner */}
      <section className="relative bg-navy py-12 md:py-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-slate-custom mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/education-levels"
                className="hover:text-white transition-colors"
              >
                Education Levels
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{level.label}</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand/20 to-brand/5 border border-brand/20 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.15)] relative group">
                <div className="absolute inset-0 bg-brand/20 rounded-2xl blur-md group-hover:blur-xl transition-all duration-500" />
                <GraduationCap className="w-8 h-8 text-brand relative z-10" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                  {level.label}{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-red-400">
                    Government Jobs
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 bg-brand/10 text-brand px-2.5 py-1 rounded-full border border-brand/20 shadow-[0_0_10px_rgba(220,38,38,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    {level.count} Active Listings
                  </span>
                  <span>•</span>
                  <span>Daily Updates</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-slate-custom max-w-2xl">
              {level.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-10 md:py-16 relative overflow-hidden bg-off-white">
        {/* Page Background Mesh */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader label="📋 LISTINGS" heading={`${level.label} Jobs`} />

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Column */}
            <div className="flex-1 lg:w-[70%]">
              <FadeIn>
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 rounded-2xl overflow-hidden relative z-20">
                  {/* Table Header */}
                  <div className="bg-slate-50/80 backdrop-blur-md px-5 py-3.5 hidden md:grid md:grid-cols-[3fr_1.5fr_1fr_0.8fr] gap-4 border-b border-slate-100 items-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Job Title
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Department
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Last Date
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                      Status
                    </span>
                  </div>

                  {/* Rows */}
                  <StaggerContainer staggerDelay={0.03}>
                    {jobs.map((job, i) => (
                      <StaggerItem key={i}>
                        {/* Desktop Row */}
                        <Link
                          href={`/post/${generateSlug(job.title)}`}
                          className="hidden md:grid md:grid-cols-[3fr_1.5fr_1fr_0.8fr] gap-4 px-5 py-3.5 border-b border-slate-100/60 hover:bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 items-center group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-linear-to-r from-brand/0 via-brand/2 to-brand/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="text-[13px] font-semibold text-dark-text group-hover:text-brand transition-all duration-300 group-hover:translate-x-1 truncate relative z-10">
                            {job.title}
                          </span>
                          <span className="text-[11px] text-slate-500 truncate">
                            {job.department}
                          </span>
                          <span className="text-[11px] text-body-text font-mono">
                            {job.lastDate}
                          </span>
                          <div className="flex justify-center">
                            <StatusBadge status={job.status} />
                          </div>
                        </Link>

                        {/* Mobile Card */}
                        <div className="md:hidden px-4 py-4 border-b border-slate-100/60 hover:bg-white transition-all duration-300 group">
                          <Link
                            href={`/post/${generateSlug(job.title)}`}
                            className="block"
                          >
                            <p className="text-sm font-semibold text-dark-text group-hover:text-brand transition-colors line-clamp-2 mb-2">
                              {job.title}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-custom">
                                  {job.department}
                                </span>
                                <span className="text-xs text-body-text font-mono">
                                  {job.lastDate}
                                </span>
                              </div>
                              <StatusBadge status={job.status} />
                            </div>
                          </Link>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {jobs.length === 0 && (
                    <div className="p-8 text-center">
                      <GraduationCap className="w-12 h-12 text-slate-custom mx-auto mb-3" />
                      <p className="text-sm text-slate-custom">
                        No jobs available for this category yet.
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <FadeIn
              direction="left"
              delay={0.2}
              className="lg:w-[30%] shrink-0"
            >
              <div className="lg:sticky lg:top-20 space-y-5">
                {/* Other Education Levels Sidebar Nav */}
                <div className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-2xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h4 className="text-[15px] font-black text-dark-text flex items-center gap-2 uppercase tracking-wide">
                      <GraduationCap className="w-4 h-4 text-brand" /> Education
                      Levels
                    </h4>
                    <Link
                      href="/education-levels"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-brand hover:bg-brand-hover px-2.5 py-1 rounded-full shadow-sm shadow-brand/30 transition-all duration-200 hover:shadow-md hover:shadow-brand/20 hover:-translate-y-px"
                    >
                      View All Education
                    </Link>
                  </div>
                  <ul className="space-y-1.5 relative z-10">
                    {educationLevels.map((edu) => {
                      const isActive = slug === edu.slug;
                      return (
                        <li key={edu.slug}>
                          <Link
                            href={`/${edu.slug}`}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 border ${
                              isActive
                                ? "bg-linear-to-r from-brand to-red-500 text-white shadow-lg shadow-brand/20 border-transparent scale-[1.02]"
                                : "bg-white border-slate-100 text-slate-600 hover:border-brand/30 hover:shadow-sm hover:text-brand"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <GraduationCap
                                className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-brand"}`}
                              />
                              {edu.label}
                            </div>

                            {/* <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {edu.count}
                            </span> */}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-2xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                  <h4 className="text-[15px] font-black text-dark-text mb-4 flex items-center gap-2 relative z-10 uppercase tracking-wide">
                    <Zap className="w-4 h-4 text-brand" /> Quick Links
                  </h4>
                  <ul className="space-y-1 relative z-10">
                    {[
                      "Latest Notifications",
                      "Admit Card",
                      "Results",
                      "Syllabus",
                      "Answer Key",
                      "Sarkari Result",
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="flex items-center justify-between px-3 py-2.5 -mx-3 rounded-xl hover:bg-brand/5 border border-transparent hover:border-brand/10 group/link transition-all duration-200"
                        >
                          <span className="text-[13px] font-medium text-slate-600 group-hover/link:text-brand transition-colors duration-200">
                            {link}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/link:text-brand group-hover/link:translate-x-1 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subscribe Card */}
                <div className="bg-linear-to-br from-navy to-[#0F203A] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] ring-1 ring-white/5 rounded-2xl p-5 relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/20 rounded-full blur-2xl group-hover:bg-brand/30 transition-colors duration-500" />
                  <div className="relative z-10">
                    <Bell className="w-5 h-5 text-brand mb-2.5" />
                    <h4 className="text-[15px] font-bold text-white mb-1">
                      Get Job Alerts
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                      Subscribe for instant updates on your phone.
                    </p>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 w-full bg-[#0088CC] hover:bg-[#0077B3] text-white text-[13px] font-medium rounded-full py-2 mb-2 transition-colors duration-200"
                    >
                      <Send className="w-3.5 h-3.5" /> Join Telegram
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1DA851] text-white text-[13px] font-medium rounded-full py-2 transition-colors duration-200"
                    >
                      <Phone className="w-3.5 h-3.5" /> Join WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
