"use client";

import Link from "next/link";
import { Send, MapPin, Mail, ArrowRight, Download, Heart } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Latest Jobs", href: "/categories" },
  { label: "Admit Card", href: "/admit-card" },
  { label: "Result", href: "/results" },
  { label: "Syllabus", href: "/syllabus" },
  { label: "Answer Key", href: "/answer-key" },
  { label: "Education Updates", href: "/education-levels" },
  { label: "University Updates", href: "/education-levels" },
];

const jobCategories = [
  { label: "Current Jobs", href: "/current-job" },
  { label: "Bank Jobs", href: "/bank" },
  { label: "Teaching Jobs", href: "/teaching" },
  { label: "Railway Jobs", href: "/railway" },
  { label: "Police/Defence", href: "/police-defence" },
  { label: "Engineering Jobs", href: "/engineering" },
  { label: "Medical Jobs", href: "/medical" },
  { label: "SSC Jobs", href: "/ssc" },
  { label: "UPSC Jobs", href: "/upsc" },
];

const resources = [
 
  { label: "Admissions", href: "/admission" },
  { label: "Important Links", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const importantLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Sitemap", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b px-3 from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-20 relative z-10">
        {/* Newsletter Section */}
        <div className="relative py-12 lg:py-16">
          <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative icon */}
            <div className="hidden sm:flex absolute top-6 right-6 lg:top-8 lg:right-8 w-20 h-20 bg-brand/20 rounded-2xl items-center justify-center backdrop-blur-sm">
              <Send className="w-10 h-10 text-brand" />
            </div>

            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Stay Updated
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Subscribe to Job Alerts
              </h3>
              <p className="text-slate-400 mb-6 text-sm lg:text-base">
                Get instant notifications for new government jobs, results,
                admit cards, and more directly in your inbox.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand focus:bg-white/10 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xl shadow-lg shadow-brand/30 hover:shadow-brand/50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand to-brand-hover flex items-center justify-center shadow-lg shadow-brand/30 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">SCH</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-white">
                    Sarkari Career Hub
                  </span>
                  <p className="text-xs text-slate-500 -mt-0.5">
                    Your Gateway to Government Jobs
                  </p>
                </div>
              </Link>

              <p className="text-slate-400 leading-relaxed mb-6 text-sm max-w-md">
                Your trusted partner for government jobs, results, admit cards,
                syllabus, and career updates across India. We provide fastest
                updates to help you achieve your dream career.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-brand" />
                  </div>
                  <span>India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-brand" />
                  </div>
                  <span>contact@sarkaricareerhub.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="inline items-center gap-4">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mr-2">
                  Follow us
                </span>
                <div className="flex items-center gap-2 pt-2">
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0088CC] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaTelegram className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#000000] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF0000] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-linear-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77729] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-6 bg-linear-to-b from-brand to-brand/50 rounded-full" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                  Quick Links
                </h4>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white hover:pl-2 inline-block transition-all duration-300 items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Categories */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-6 bg-linear-to-b from-brand to-brand/50 rounded-full" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                  Job Categories
                </h4>
              </div>
              <ul className="space-y-3">
                {jobCategories.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white hover:pl-2 inline-block transition-all duration-300 items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-6 bg-linear-to-b from-brand to-brand/50 rounded-full" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                  Resources
                </h4>
              </div>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white hover:pl-2 inline-block transition-all duration-300 items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* App Download */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <h5 className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">
                  Download App
                </h5>
                <button className="flex items-center gap-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all duration-300 group">
                  <Download className="w-5 h-5 text-brand" />
                  <div className="text-left">
                    <div className="text-xs text-slate-400">Get the App</div>
                    <div className="text-sm font-semibold">
                      Sarkari Career Hub
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Top Categories Bar */}
        <div className="pb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Browse by State
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Uttar Pradesh",
                "Bihar",
                "Madhya Pradesh",
                "Rajasthan",
                "Maharashtra",
                "Delhi",
                "West Bengal",
                "Tamil Nadu",
                "Karnataka",
                "Gujarat",
                "Punjab",
                "Haryana",
                "Jharkhand",
                "Odisha",
                "Chhattisgarh",
                "Uttarakhand",
                "Himachal Pradesh",
              ].map((state) => (
                <Link
                  key={state}
                  href={`/${state.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-1.5 bg-white/5 hover:bg-brand/20 text-slate-400 hover:text-white text-xs font-medium rounded-lg transition-all duration-300"
                >
                  {state}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>
                Copyright &copy; {new Date().getFullYear()} Sarkari Career Hub.
                All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-xs">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>in India</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-xs">
              {importantLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-slate-600 text-xs mt-4 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: This website is for informational purposes only. Always
            verify details from official sources before applying. We are not
            responsible for any decisions made based on this information.
          </p>
        </div>
      </div>
    </footer>
  );
}
