"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Clock,
  Users,
  IndianRupee,
  FileCheck,
  AlertCircle,
  ChevronRight,
  Bookmark,
  Share2,
  Printer,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Zap,
  Send,
} from "lucide-react";
import { postDetails } from "@/data/posts";
import { FadeIn } from "@/components/FadeIn";
import { StatusBadge } from "@/components/StatusBadge";

interface PostDetailPageProps {
  slug: string;
}

export function PostDetailPage({ slug }: PostDetailPageProps) {
  const post = postDetails[slug];

  return (
    <div className="min-h-screen pt-16 bg-off-white overflow-hidden relative">
      {/* Page Background Mesh */}
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />

      {/* Post Hero */}
      <section className="relative bg-navy pt-6 pb-12 md:pb-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb & Top Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <FadeIn>
              <nav className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link
                  href={`/${post.category}`}
                  className="hover:text-white transition-colors capitalize"
                >
                  {post.category.replace("-", " ")}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-md">
                  {post.title}
                </span>
              </nav>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group">
                  <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group">
                  <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group">
                  <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand/20 to-brand/5 border border-brand/20 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.15)] relative group shrink-0 mt-1">
                <div className="absolute inset-0 bg-brand/20 rounded-2xl blur-md group-hover:blur-xl transition-all duration-500" />
                <Briefcase className="w-8 h-8 text-brand relative z-10" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <StatusBadge status={post.status as any} />
                  <span className="text-xs text-white/50 font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                    ID: {post.id}
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3 leading-tight">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-300">
                    {post.title}
                  </span>
                </h1>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                    <Building2 className="w-4 h-4 text-brand" />
                    <span className="text-sm font-medium text-slate-200">
                      {post.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-slate-200">
                      Last Date:{" "}
                      <span className="text-white">{post.lastDate}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-6 md:py-8 -mt-6 relative z-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="flex-1 lg:w-[70%] space-y-6">
              {/* Quick Info Bar */}
              <FadeIn delay={0.3}>
                <div className="bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 rounded-2xl p-2 flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                  <QuickInfo
                    icon={Users}
                    label="Total Posts"
                    value={post.totalPosts}
                    color="text-indigo-500"
                    bg="bg-indigo-50"
                  />
                  <QuickInfo
                    icon={Clock}
                    label="Age Limit"
                    value={post.ageLimit.split("(")[0].trim()}
                    color="text-amber-500"
                    bg="bg-amber-50"
                  />
                  <QuickInfo
                    icon={GraduationCap}
                    label="Qualification"
                    value={post.qualification.split("/")[0].trim()}
                    color="text-emerald-500"
                    bg="bg-emerald-50"
                  />
                  <QuickInfo
                    icon={IndianRupee}
                    label="Application Fee"
                    value={post.applicationFee.split("(")[0].trim()}
                    color="text-rose-500"
                    bg="bg-rose-50"
                  />
                </div>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.4}>
                <div className="bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 rounded-2xl p-5 flex flex-wrap gap-3 items-center">
                  <Link
                    href="#"
                    className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 bg-linear-to-r from-brand to-red-500 hover:from-red-600 hover:to-red-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-[0_4px_15px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 text-[13px]"
                  >
                    <ExternalLink className="w-5 h-5" /> Apply Online
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 px-5 py-2.5 rounded-xl transition-all duration-300 text-[13px]"
                  >
                    <Download className="w-5 h-5 text-blue-500" /> Notification
                    PDF
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 px-5 py-2.5 rounded-xl transition-all duration-300 text-[13px]"
                  >
                    <FileCheck className="w-5 h-5 text-emerald-500" /> Official
                    Syllabus
                  </Link>
                </div>
              </FadeIn>

              {/* Important Dates Box */}
              <FadeIn delay={0.5}>
                <div className="bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 rounded-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                  <div className="p-4 border-b border-slate-100/60 bg-slate-50/50">
                    <h3 className="text-[15px] font-bold text-dark-text flex items-center gap-2 uppercase tracking-wide">
                      <Calendar className="w-4 h-4 text-blue-500" /> Important
                      Dates
                    </h3>
                  </div>
                  <div className="p-4 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {post.importantDates.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group/date"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover/date:bg-blue-500 transition-colors duration-300">
                            <Calendar className="w-4 h-4 text-blue-500 group-hover/date:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-xs font-bold text-slate-700">
                              {item.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Full Details */}
              <FadeIn delay={0.6}>
                <div className="bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 rounded-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                  <div className="p-4 border-b border-slate-100/60 bg-slate-50/50">
                    <h3 className="text-[15px] font-bold text-dark-text flex items-center gap-2 uppercase tracking-wide">
                      <Briefcase className="w-4 h-4 text-brand" /> Detailed
                      Information
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-100/60 relative z-10">
                    <DetailRow label="Department" value={post.department} />
                    <DetailRow
                      label="Total Vacancies"
                      value={post.totalPosts}
                      highlight
                    />
                    <DetailRow label="Age Limit" value={post.ageLimit} />
                    <DetailRow
                      label="Eligibility Criteria"
                      value={post.qualification}
                    />
                    <DetailRow
                      label="Application Fee"
                      value={post.applicationFee}
                    />
                    <DetailRow label="Salary / Pay Scale" value={post.salary} />
                    <DetailRow
                      label="Selection Process"
                      value={post.selectionProcess}
                    />
                    <div className="p-4 bg-slate-50/30">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />{" "}
                        How to Apply
                      </p>
                      <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed font-medium">
                        <p>{post.howToApply}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Tags */}
              <FadeIn delay={0.7}>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                    Tags:
                  </span>
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white border border-slate-200 text-slate-600 hover:text-brand hover:border-brand/30 shadow-sm text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[320px] shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Alert Box */}
                <FadeIn direction="left" delay={0.4}>
                  <div className="bg-linear-to-br from-brand to-red-600 rounded-2xl p-4 shadow-[0_8px_30px_rgba(220,38,38,0.2)] text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center mb-3">
                        <AlertCircle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-[15px] font-bold tracking-wide mb-1.5">
                        Action Required
                      </h4>
                      <p className="text-white/90 text-[13px] font-medium mb-5 leading-relaxed">
                        The deadline to submit your application is{" "}
                        <span className="font-bold underline decoration-white/40 underline-offset-2">
                          {post.lastDate}
                        </span>
                        . Ensure all documents are uploaded before the portal
                        closes.
                      </p>
                      <a
                        href="#"
                        className="flex items-center justify-center w-full bg-white text-brand hover:bg-slate-50 font-bold py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md text-[13px]"
                      >
                        Start Application
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Related Posts */}
                <FadeIn direction="left" delay={0.5}>
                  <div className="bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 rounded-2xl p-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                    <h4 className="text-[13px] font-bold text-dark-text mb-3 flex items-center gap-2 relative z-10 uppercase tracking-wide">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> Similar
                      Jobs
                    </h4>
                    <ul className="space-y-1 relative z-10">
                      {post.relatedPosts.map((title, i) => (
                        <li key={i}>
                          <Link
                            href={`/post/${title
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^a-z0-9-]/g, "")}`}
                            className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 group/link transition-all duration-200"
                          >
                            <div className="mt-0.5 bg-slate-100 rounded-md p-1 group-hover/link:bg-brand/10 transition-colors">
                              <Briefcase className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-brand transition-colors" />
                            </div>
                            <span className="text-xs font-semibold text-slate-600 group-hover/link:text-brand transition-colors duration-200 line-clamp-2 leading-snug">
                              {title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Subscribe Box */}
                <FadeIn direction="left" delay={0.6}>
                  <div className="bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] ring-1 ring-slate-100 rounded-2xl p-4 text-center border-t-4 border-[#0088CC]">
                    <div className="w-10 h-10 bg-[#0088CC]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Send className="w-4 h-4 text-[#0088CC]" />
                    </div>
                    <h4 className="font-bold text-[13px] text-dark-text mb-1">
                      Get Instant Alerts
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 mb-4 leading-relaxed">
                      Join our Telegram channel to receive updates before anyone
                      else.
                    </p>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 w-full bg-[#0088CC] hover:bg-[#0077B3] text-white text-[13px] font-bold rounded-xl py-2.5 shadow-[0_4px_15px_rgba(0,136,204,0.2)] hover:shadow-[0_6px_20px_rgba(0,136,204,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Join Telegram Now
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickInfo({
  icon: Icon,
  label,
  value,
  color,
  bg,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
  bg: string;
}) {
  return (
    <div className="flex-1 w-full lg:w-auto p-3 flex items-center gap-3 group cursor-default">
      <div
        className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-[13px] font-semibold text-slate-700 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start p-4 hover:bg-slate-50/50 transition-colors">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider sm:w-40 shrink-0 mt-0.5 flex items-center gap-2">
        <span
          className={`w-1.5 h-1.5 rounded-full ${highlight ? "bg-brand" : "bg-slate-300"}`}
        />{" "}
        {label}
      </p>
      <div className="flex-1 mt-1 sm:mt-0">
        <p
          className={`text-[13px] leading-relaxed ${highlight ? "text-brand font-bold" : "text-slate-700 font-medium"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
