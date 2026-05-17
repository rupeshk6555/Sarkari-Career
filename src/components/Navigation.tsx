"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Home,
  Briefcase,
  FileText,
  Trophy,
  BookOpen,
  GraduationCap,
  Key,
  FileCheck,
  Building2,
  MapPin,
  Landmark,
  Train,
  Shield,
  Newspaper,
  Stethoscope,
  Globe,
  type LucideIcon,
} from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Latest Jobs",
    href: "/categories",
    icon: Briefcase,
    dropdown: [
      {
        label: "Current Job",
        href: "/current-job",
        icon: Building2,
      },
      { label: "Bank Jobs", href: "/bank", icon: Landmark },
      { label: "SSC Jobs", href: "/ssc", icon: FileText },
      { label: "UPSC Jobs", href: "/upsc", icon: Globe },
      { label: "Teaching Jobs", href: "/teaching", icon: BookOpen },
      { label: "Railway Jobs", href: "/railway", icon: Train },
      {
        label: "Police/Defence Jobs",
        href: "/police-defence",
        icon: Shield,
      },
      {
        label: "Engineering Jobs",
        href: "/engineering",
        icon: Briefcase,
      },
      { label: "Medical Jobs", href: "/medical", icon: Stethoscope },
    ],
  },
  { label: "Admit Card", href: "/admit-card", icon: FileText },
  { label: "Result", href: "/results", icon: Trophy },
  { label: "Syllabus", href: "/syllabus", icon: BookOpen },
  {
    label: "Education",
    href: "/education-levels",
    icon: GraduationCap,
    dropdown: [
      { label: "10th Pass Jobs", href: "/10th-pass" },
      { label: "12th Pass Jobs", href: "/12th-pass" },
      { label: "Diploma Jobs", href: "/diploma" },
      { label: "ITI Jobs", href: "/iti" },
      { label: "Graduate Jobs", href: "/graduate" },
      { label: "Post Graduate Jobs", href: "/post-graduate" },
    ],
  },
  { label: "Answer Key", href: "/answer-key", icon: Key },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // When user clicks a nav link on the home page, the nav is bg-transparent.
  // The new page's outer wrapper (bg-off-white) briefly shows through that
  // transparency, creating the "white flash". We track a leaving state so we
  // can force the nav to bg-navy IMMEDIATELY on click — before React even
  // processes the route change.
  const [leavingHome, setLeavingHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fires synchronously before paint on every route change.
  // Resets transient navigation state so the new page always starts clean.
  useLayoutEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setScrolled(false);
    setLeavingHome(false); // new page is loaded, clear the transition flag
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Called synchronously when ANY nav link is clicked.
  // Setting leavingHome=true instantly removes bg-transparent, so the
  // new page's white background can never show through the nav.
  const handleLinkClick = useCallback(() => {
    setLeavingHome(true);
    setScrolled(false);
  }, []);

  // isHomePage is only true when we're confirmed on "/" AND not mid-transition.
  const isHomePage = pathname === "/" && !leavingHome;

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-navy" />;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
          scrolled
            ? "bg-white/85 shadow-sm border-slate-200/50"
            : isHomePage
              ? "bg-transparent border-transparent"
              : "bg-navy border-navy"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={handleLinkClick}
            >
              <div className="w-8 h-8 rounded-md bg-brand flex items-center justify-center font-bold text-sm text-white">
                SCH
              </div>
              <span
                className={`font-bold text-lg hidden sm:block ${scrolled ? "text-slate-800" : "text-white"}`}
              >
                Sarkari Career Hub
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.dropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        scrolled
                          ? "text-slate-700 hover:text-brand"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        scrolled
                          ? "text-slate-700 hover:text-brand"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 min-w-[220px] border border-white/20 ring-1 ring-black/5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-dark-text hover:bg-brand-light hover:text-brand transition-colors duration-150"
                          >
                            {item.icon && (
                              <item.icon className="w-4 h-4 text-slate-custom" />
                            )}
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand text-white hover:bg-brand-hover transition-colors duration-200">
                <Newspaper className="w-4 h-4" />
                Subscribe
              </button>

              <button
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center"
                onClick={() => setMobileOpen(true)}
              >
                <Menu
                  className={`w-5 h-5 ${scrolled ? "text-slate-800" : "text-white"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <span className="font-bold text-dark-text">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-light-gray"
              >
                <X className="w-5 h-5 text-dark-text" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label,
                          )
                        }
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-dark-text rounded-md hover:bg-light-gray"
                      >
                        <span className="flex items-center gap-2">
                          <link.icon className="w-4 h-4 text-slate-custom" />
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 space-y-1 mt-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={handleLinkClick}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-body-text rounded-md hover:bg-brand-light hover:text-brand"
                            >
                              {item.icon && (
                                <item.icon className="w-3.5 h-3.5" />
                              )}
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-dark-text rounded-md hover:bg-light-gray"
                    >
                      <link.icon className="w-4 h-4 text-slate-custom" />
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
