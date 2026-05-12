import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface SectionHeaderProps {
  label: string;
  heading: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function SectionHeader({ label, heading, showViewAll = false, viewAllHref = '#' }: SectionHeaderProps) {
  return (
    <FadeIn className="mb-8">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs font-medium uppercase tracking-wider text-brand">{label}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-dark-text">{heading}</h2>
        </div>
        {showViewAll && (
          <Link
            href={viewAllHref}
            className="hidden md:flex items-center gap-1 text-sm font-medium text-brand hover:underline transition-colors duration-200"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </FadeIn>
  );
}
