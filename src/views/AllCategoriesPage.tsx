"use client";

import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { allCategoryDefs } from "@/data/categories";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

export function AllCategoriesPage() {
  return (
    <div className="min-h-screen pt-16 bg-off-white">
      {/* Hero Banner */}
      <section className="bg-linear-to-br from-navy to-navy-light py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-slate-custom mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">All Categories</span>
            </nav>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              All Job Categories
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-slate-custom max-w-2xl">
              Browse government jobs by category. Find the perfect opportunity
              that matches your skills and qualifications across all sectors.
            </p>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn delay={0.3}>
            <div className="mt-6 max-w-lg">
              <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl h-12 sm:h-14 px-1.5 sm:px-2 group hover:bg-white/15 transition-all duration-300 focus-within:bg-white/20 focus-within:border-white/40 focus-within:ring-4 focus-within:ring-brand/30">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 ml-3 sm:ml-4 shrink-0 transition-colors group-focus-within:text-white" />
                <input
                  type="text"
                  placeholder="Search categories..."
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

      {/* Categories Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <SectionHeader label="BROWSE" heading="Explore Job Categories" />

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {allCategoryDefs.map((cat) => {
              const Icon = cat.icon;
              return (
                <StaggerItem key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="group block bg-white rounded-md-custom shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color.split(" ")[0]} ${cat.color.split(" ")[1]}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-full">
                        {cat.jobCount} Jobs
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark-text mb-2 group-hover:text-brand transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-slate-custom leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.subcategories?.slice(0, 4).map((sub) => (
                        <span
                          key={sub}
                          className="text-[10px] bg-light-gray text-slate-custom px-2 py-0.5 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border-custom flex items-center justify-between">
                      <span className="text-sm font-medium text-brand">
                        Browse Jobs
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-custom group-hover:text-brand group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
