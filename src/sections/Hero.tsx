import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy pt-10 sm:pt-12 pb-6 sm:pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 py-6 md:py-8">
        {/* Hero Text */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            Your Gateway to Government Jobs
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest job notifications, admit cards, results, and syllabus for all government exams in India.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center  bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl h-12 sm:h-14 px-1.5 sm:px-2 group hover:bg-white/15 transition-all duration-300 focus-within:bg-white/20 focus-within:border-white/40 focus-within:ring-4 focus-within:ring-brand/30 max-w-2xl mx-auto">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 ml-3 sm:ml-4 shrink-0 transition-colors group-focus-within:text-white" />
          <input
            type="text"
            placeholder="Search jobs, results, admit cards..."
            className="flex-1 min-w-0 px-2 sm:px-4 text-sm sm:text-base text-white placeholder:text-white/50 outline-none bg-transparent"
          />
          <button className="bg-brand hover:bg-brand-hover text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 shrink-0 hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
