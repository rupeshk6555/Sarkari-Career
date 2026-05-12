import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/jobs";
import { SectionHeader } from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-off-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <SectionHeader label="❓ HELP" heading="Frequently Asked Questions" />

        <StaggerContainer staggerDelay={0.06} className="space-y-2">
          {faqData.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-md-custom border border-border-custom overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm cursor-pointer font-medium text-dark-text pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-custom shrink-0 transition-transform duration-300 ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 border-t border-border-custom pt-3">
                        <p className="text-sm text-body-text leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
