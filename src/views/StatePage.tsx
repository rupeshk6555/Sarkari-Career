"use client";

import {
  FileText,
  Zap,
  Briefcase,
  BookOpen,
  Key,
  GraduationCap,
  Building2,
  Award,
  Info,
  MapPin,
} from "lucide-react";
import { JobListCard } from "@/components/JobListCard";
import {
  admitCards,
  currentJobs,
  results,
  answerKeys,
  syllabus,
  admissions,
  eduUpdates,
  yojana,
  documents,
} from "@/data/jobs";
import { SectionHeader } from "@/components/SectionHeader";

export function StatePage({ stateName }: { stateName: string }) {
  // Format stateName from URL (e.g. "uttar-pradesh" -> "Uttar Pradesh")
  const formattedStateName = stateName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-12">
      {/* State Header */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 pt-16 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-300">
              {formattedStateName}
            </span>{" "}
            : Latest Job, Admit Card, Result, Syllabus
          </h1>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20 mt-2">
            <MapPin className="w-5 h-5 text-brand" />
            <span className="text-slate-200 font-semibold">
              {formattedStateName}
            </span>
          </div>
        </div>
      </div>

      {/* Grid Layout identical to home page logic but arranged as requested */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 mt-8 relative z-20 space-y-8">
        {/* Row 1: Admit Card, Result, Current Job */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <JobListCard
            title="Admit Card"
            icon={FileText}
            items={admitCards.slice(0, 8)}
            viewAllHref="/admit-card"
            viewAllText="View All Admit Cards"
            delay={0}
          />
          <JobListCard
            title="Result"
            icon={Award}
            items={results.slice(0, 8)}
            viewAllHref="/results"
            viewAllText="View All Results"
            delay={0.1}
          />
          <JobListCard
            title="Current Job"
            icon={Briefcase}
            items={currentJobs.slice(0, 8)}
            viewAllHref="#"
            viewAllText="View All Jobs"
            delay={0.2}
          />
        </div>

        {/* Row 2: Syllabus, Answer Key, Admission */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <JobListCard
            title="Syllabus"
            icon={BookOpen}
            items={syllabus.slice(0, 8)}
            viewAllHref="/syllabus"
            viewAllText="View All Syllabus"
            delay={0.3}
          />
          <JobListCard
            title="Answer Key"
            icon={Key}
            items={answerKeys.slice(0, 8)}
            viewAllHref="/answer-key"
            viewAllText="View All Answer Keys"
            delay={0.4}
          />
          <JobListCard
            title="Admission"
            icon={GraduationCap}
            items={admissions.slice(0, 8)}
            viewAllHref="/admission"
            viewAllText="View All Admissions"
            delay={0.5}
          />
        </div>

        {/* Row 3: University Update, Scholarship, Other Update */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <JobListCard
            title="University Update"
            icon={Building2}
            items={eduUpdates.slice(0, 8)}
            viewAllHref="/university-update"
            viewAllText="View All Updates"
            delay={0.6}
          />
          <JobListCard
            title="Scholarship"
            icon={Award}
            items={yojana.slice(0, 4)}
            viewAllHref="/sarkari-yojana"
            viewAllText="View All Scholarships"
            delay={0.7}
          />
        </div>
      </div>
    </div>
  );
}
