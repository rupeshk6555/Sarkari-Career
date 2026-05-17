import {
  FileText,
  Download,
  Calculator,
  FileSearch,
  FileText as FileTextIcon,
  Image,
  CreditCard,
  Vote,
  HeartPulse,
  IdCard,
  HardHat,
  FileCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import Link from "next/link";

const docIcons = [
  CreditCard,
  CreditCard,
  Vote,
  HeartPulse,
  HeartPulse,
  IdCard,
  HardHat,
  FileCheck,
];

// tool only realted exam form filling tools
const tools = [
  { icon: Calculator, label: "Age Calculator", href: "/tool/age-calculator" },
  { icon: FileSearch, label: "Image Resizer", href: "/tool/image-resizer" },
  { icon: FileTextIcon, label: "PDF to Word" },
  { icon: Image, label: "Image to PDF" },

  // 100 kb, 5okb , 200kb , 150kb , 250kb , 160kb , 120kb  image convert tools

  {
    icon: Image,
    label: "100 kb",
  },
  {
    icon: Image,
    label: "50 kb",
  },
  {
    icon: Image,
    label: "200 kb",
  },
  {
    icon: Image,
    label: "150 kb",
  },
  {
    icon: Image,
    label: "250 kb",
  },
  {
    icon: Image,
    label: "160 kb",
  },
  {
    icon: Image,
    label: "120 kb",
  },
];

export function UtilityTools() {
  return (
    <section
      id="documents"
      className="py-12 md:py-16 relative bg-slate-50/80 border-t border-slate-200/50 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader label="🛠️ TOOLS & DOCUMENTS" heading="Useful Tools" />

        <div className="grid">
          {/* Tools Column */}
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
          >
            {tools.map((tool, i) => (
              <StaggerItem key={i}>
                <Link
                  href={tool.href || "#"}
                  className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md border border-white ring-1 ring-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-6 text-center hover:bg-linear-to-br hover:from-brand hover:to-brand-hover hover:text-white hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 transition-all duration-300 group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full -mr-6 -mt-6 transition-transform duration-500 group-hover:scale-110 pointer-events-none group-hover:bg-white/10 z-0" />
                  <tool.icon className="w-8 h-8 text-brand mb-3 group-hover:text-white transition-colors relative z-10" />
                  <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors relative z-10">
                    {tool.label}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
