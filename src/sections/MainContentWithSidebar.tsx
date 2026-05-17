"use client";

import {
  FileText,
  Zap,
  Trophy,
  Key,
  BookOpen,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { JobListCard } from "@/components/JobListCard";
import {
  admitCards,
  latestUpdates,
  currentJobs,
  results,
  answerKeys,
  syllabus,
  admissions,
  eduUpdates,
  eduNotifications,
} from "@/data/jobs";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryQuickLinks } from "./CategoryQuickLinks";
import { JobsByEducation } from "./JobsByEducation";
import { StateJobsSidebar } from "./StateJobsSidebar";

export function MainContentWithSidebar() {
  return (
    <div className="bg-slate-50/80 border-t border-slate-200/50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-12 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Main Content ── */}
          <div className="flex-1 min-w-0 space-y-10">
            {/* 1. Latest Notifications: Current Jobs + Admit Card + Latest Updates */}
            <div id="admit-card">
              <SectionHeader
                label="📋 QUICK ACCESS"
                heading="Latest Notifications"
                showViewAll
                viewAllHref="#"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <JobListCard
                  title="Current Jobs"
                  icon={Briefcase}
                  items={currentJobs}
                  viewAllHref="/current-job"
                  viewAllText="View All"
                  delay={0}
                />
                <JobListCard
                  title="Admit Card"
                  icon={FileText}
                  items={admitCards}
                  viewAllHref="/admit-card"
                  viewAllText="View All"
                  delay={0.08}
                />
                <JobListCard
                  title="⚡ Latest Updates"
                  icon={Zap}
                  items={latestUpdates}
                  viewAllHref="/latest-updates"
                  viewAllText="View All"
                  delay={0.16}
                />
              </div>
            </div>

            {/* 2. Results & Answer Keys */}
            <div id="results">
              <SectionHeader
                label="📋 EXAM OUTCOMES"
                heading="Results & Answer Keys"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <JobListCard
                  title="Results"
                  icon={Trophy}
                  items={results}
                  viewAllHref="/results"
                  viewAllText="View All"
                  delay={0}
                />
                <JobListCard
                  title="Answer Key"
                  icon={Key}
                  items={answerKeys}
                  viewAllHref="/answer-key"
                  viewAllText="View All"
                  delay={0.1}
                />
              </div>
            </div>

            {/* 3. Syllabus & Admissions */}
            <div id="syllabus">
              <SectionHeader
                label="📚 STUDY MATERIAL"
                heading="Syllabus & Admissions"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <JobListCard
                  title="Syllabus"
                  icon={BookOpen}
                  items={syllabus}
                  viewAllHref="/syllabus"
                  viewAllText="View All"
                  delay={0}
                />
                <JobListCard
                  title="Admission"
                  icon={GraduationCap}
                  items={admissions}
                  viewAllHref="/admission"
                  viewAllText="View All"
                  delay={0.1}
                />
              </div>
            </div>

            {/* 4. University Update */}
            <div id="education" className="relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]" />
              </div>
              <SectionHeader
                label="📖 EDUCATION"
                heading="University Update"
                showViewAll
                viewAllHref="/university-update"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
                <JobListCard
                  title="New Edu Updates"
                  icon={undefined as never}
                  items={eduUpdates}
                  viewAllHref="/university-update"
                  viewAllText="View All"
                  delay={0}
                  slim
                />
                <JobListCard
                  title="Notifications"
                  icon={undefined as never}
                  items={eduNotifications}
                  viewAllHref="/university-update"
                  viewAllText="View All"
                  delay={0.1}
                  slim
                />
              </div>
            </div>
          </div>

          {/* ── Sticky Sidebar ── */}
          <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6 lg:space-y-4">
              <CategoryQuickLinks />
              <JobsByEducation />
              <StateJobsSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
