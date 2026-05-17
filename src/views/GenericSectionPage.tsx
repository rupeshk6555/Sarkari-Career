"use client";

import Link from "next/link";
import {
  Building2,
  Landmark,
  BookOpen,
  Train,
  Shield,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  Zap,
  Search,
  Stethoscope,
  FileText,
  Globe,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { StatusBadge } from "@/components/StatusBadge";
import type { JobItem } from "@/data/jobs";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 80);
}

const sidebarCategories = [
  { icon: Building2, label: "All India Govt Jobs", slug: "current-job" },
  { icon: Landmark, label: "Bank Jobs", slug: "bank" },
  { icon: BookOpen, label: "Teaching Jobs", slug: "teaching" },
  { icon: Train, label: "Railway Jobs", slug: "railway" },
  { icon: Shield, label: "Police/Defence Jobs", slug: "police-defence" },
  { icon: Briefcase, label: "Engineering Jobs", slug: "engineering" },
  { icon: Stethoscope, label: "Medical Jobs", slug: "medical" },
  { icon: FileText, label: "SSC Jobs", slug: "ssc" },
  { icon: Globe, label: "UPSC Jobs", slug: "upsc" },
  { icon: GraduationCap, label: "Education", slug: "education" },
];

export interface GenericSectionPageProps {
  title: string;
  jobs: JobItem[];
}

export function GenericSectionPage({ title, jobs }: GenericSectionPageProps) {
  return (
    <div className="min-h-screen pt-16 bg-off-white overflow-hidden relative">
      {/* Page Background Mesh */}
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />

      {/* Category Hero */}
      <section className="relative bg-navy py-12 md:py-20 overflow-hidden">
        {/* Background Glows */}

        <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
          {/* Search Bar */}
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl h-12 sm:h-14 px-1.5 sm:px-2 group hover:bg-white/15 transition-all duration-300 focus-within:bg-white/20 focus-within:border-white/40 focus-within:ring-4 focus-within:ring-brand/30">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 ml-3 sm:ml-4 shrink-0 transition-colors group-focus-within:text-white" />
                <input
                  type="text"
                  placeholder={`Search in ${title}...`}
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

      {/* Main Content */}
      <section className="py-10 md:py-12 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Column */}
            <div className="flex-1 lg:w-[70%]">
              <FadeIn>
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 rounded-2xl overflow-hidden relative z-20">
                  {/* Table Header */}
                  <div className="bg-slate-50/80 backdrop-blur-md px-5 py-3.5 hidden md:grid md:grid-cols-[3fr_1.5fr_1fr_0.8fr] gap-4 border-b border-slate-100 items-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Title
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

                  {/* Table Rows */}
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
                            {job.department || "Various"}
                          </span>
                          <span className="text-[11px] text-body-text font-mono">
                            {job.lastDate || "Update"}
                          </span>
                          <div className="flex justify-center">
                            <StatusBadge status={job.status || "NEW"} />
                          </div>
                        </Link>

                        {/* Mobile Card */}
                        <div className="md:hidden px-4 py-4 border-b border-slate-100/60 hover:bg-white transition-all duration-300 group">
                          <Link
                            href={`/post/${generateSlug(job.title)}`}
                            className="block"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <span className="text-[13px] font-semibold text-dark-text group-hover:text-brand transition-colors line-clamp-2">
                                  {job.title}
                                </span>
                                <div className="flex items-center gap-3 mt-1.5">
                                  <span className="text-[11px] text-slate-500">
                                    {job.department || "Various"}
                                  </span>
                                  <span className="text-[11px] text-body-text font-mono">
                                    {job.lastDate || "Update"}
                                  </span>
                                </div>
                              </div>
                              <StatusBadge status={job.status || "NEW"} />
                            </div>
                          </Link>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>

              {/* Pagination */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <button
                  className="px-3 py-1.5 text-sm text-slate-custom border border-border-custom rounded-full cursor-not-allowed"
                  disabled
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-9 h-9 rounded-full text-sm font-medium transition-colors duration-200 ${
                      page === 1
                        ? "bg-brand text-white"
                        : "border border-border-custom text-dark-text hover:border-brand hover:text-brand"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-1.5 text-sm text-brand border border-brand rounded-full hover:bg-brand-light transition-colors duration-200">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <FadeIn
              direction="left"
              delay={0.2}
              className="lg:w-[30%] shrink-0"
            >
              <div className="lg:sticky lg:top-20 space-y-5">
                {/* Category Nav */}
                <div className="bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-2xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                  <h4 className="text-[15px] font-black text-dark-text mb-4 flex items-center gap-2 relative z-10 uppercase tracking-wide">
                    <Briefcase className="w-4 h-4 text-brand" /> Job Categories
                  </h4>
                  <ul className="space-y-1.5 relative z-10">
                    {sidebarCategories.map((cat) => {
                      return (
                        <li key={cat.slug}>
                          <Link
                            href={`/${cat.slug}`}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 border bg-white border-slate-100 text-slate-600 hover:border-brand/30 hover:shadow-sm hover:text-brand"
                          >
                            <cat.icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand" />
                            {cat.label}
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
                      {
                        label: "Latest Jobs",
                        href: "/current-job",
                      },
                      { label: "Admit Card", href: "/admit-card" },
                      { label: "Results", href: "/results" },
                      { label: "Syllabus", href: "/syllabus" },
                      { label: "Answer Key", href: "/answer-key" },
                      { label: "Sarkari Result", href: "/" },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between px-3 py-2.5 -mx-3 rounded-xl hover:bg-brand/5 border border-transparent hover:border-brand/10 group/link transition-all duration-200"
                        >
                          <span className="text-[13px] font-medium text-slate-600 group-hover/link:text-brand transition-colors duration-200">
                            {link.label}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/link:text-brand group-hover/link:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
