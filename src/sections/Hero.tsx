import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy pt-20 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Search Bar */}
        <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl h-12 sm:h-14 px-1.5 sm:px-2 group hover:bg-white/15 transition-all duration-300 focus-within:bg-white/20 focus-within:border-white/40 focus-within:ring-4 focus-within:ring-brand/30 max-w-2xl mx-auto">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 ml-3 sm:ml-4 shrink-0 transition-colors group-focus-within:text-white" />
          <input
            type="text"
            placeholder="Search jobs, results, admit cards..."
            className="flex-1 px-3 sm:px-4 text-sm sm:text-base text-white placeholder:text-white/50 outline-none bg-transparent"
          />
          <button className="bg-brand hover:bg-brand-hover text-white font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 shrink-0 hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
