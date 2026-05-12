"use client";

import { Hero } from "@/sections/Hero";
import { StateNavigation } from "@/sections/StateNavigation";
import { TrendingJobCards } from "@/sections/TrendingJobCards";
import { MainContentWithSidebar } from "@/sections/MainContentWithSidebar";
import { UtilityTools } from "@/sections/UtilityTools";
import { FAQSection } from "@/sections/FAQSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <StateNavigation />
      {/* <TrendingJobCards /> */}
      <MainContentWithSidebar />
      <UtilityTools />
      <FAQSection />
    </>
  );
}
