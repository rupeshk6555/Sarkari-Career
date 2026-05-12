import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { JobItem } from '@/data/jobs';
import { StatusBadge } from './StatusBadge';
import { FadeIn } from './FadeIn';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 80);
}

interface JobListCardProps {
  title: string;
  icon: LucideIcon;
  items: JobItem[];
  viewAllHref?: string;
  viewAllText?: string;
  delay?: number;
  slim?: boolean;
}

export function JobListCard({
  title,
  icon: Icon,
  items,
  viewAllHref = '#',
  viewAllText = 'View All',
  delay = 0,
  slim = false,
}: JobListCardProps) {
  if (slim) {
    return (
    <FadeIn delay={delay} className="h-full">
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/40 border-l-4 border-l-brand p-5 h-full ring-1 ring-black/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 pointer-events-none group-hover:bg-brand/10 z-0" />
        
        <div className="relative z-10">
          <h4 className="text-lg font-semibold text-dark-text mb-4">{title}</h4>
          <ul className="space-y-0">
            {items.map((item, i) => (
              <li key={i} className="py-2.5 border-b border-border-custom last:border-b-0">
                <Link
                  href={`/post/${generateSlug(item.title)}`}
                  className="flex items-start gap-2 group"
                >
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                      item.status === 'NEW' || item.status === 'STARTED' || item.status === 'ONLINE' || item.status === 'APPLY NOW'
                      ? 'bg-green-500'
                      : item.status === 'OUT' || item.status === 'ALERT'
                      ? 'bg-red-500'
                      : item.status === 'SOON' || item.status === 'EXTEND'
                      ? 'bg-blue-500'
                      : 'bg-brand'
                  }`}
                  />
                  <span className="flex-1 text-sm text-dark-text group-hover:text-brand transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </span>
                  <StatusBadge status={item.status} />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-brand hover:underline relative z-10"
          >
            {viewAllText} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </FadeIn>
    );
  }

  return (
    <FadeIn delay={delay} className="h-full">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 ring-1 ring-black/5 overflow-hidden h-full flex flex-col hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110 pointer-events-none group-hover:bg-brand/10 z-0" />
        
        <div className="bg-linear-to-r from-brand to-brand-hover h-1 relative z-10" />
        <div className="p-5 flex items-center gap-2 relative z-10">
          <Icon className="w-5 h-5 text-brand" />
          <h3 className="text-xl font-semibold text-dark-text">{title}</h3>
        </div>

        <ul className="px-5 flex-1 relative z-10">
          {items.map((item, i) => (
            <li key={i} className="py-2.5 border-b border-border-custom last:border-b-0">
              <Link
                href={`/post/${generateSlug(item.title)}`}
                className="flex items-start gap-2 group/link"
              >
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                    item.status === 'NEW' || item.status === 'STARTED' || item.status === 'ONLINE' || item.status === 'APPLY NOW'
                      ? 'bg-green-500'
                      : item.status === 'OUT' || item.status === 'ALERT'
                      ? 'bg-red-500'
                      : item.status === 'SOON' || item.status === 'EXTEND'
                      ? 'bg-blue-500'
                      : 'bg-brand'
                  }`}
                />
                <span className="flex-1 text-sm text-dark-text group-hover/link:text-brand transition-all duration-200 group-hover/link:translate-x-1 line-clamp-2">
                  {item.title}
                  {item.meta && <span className="block text-xs text-slate-custom mt-0.5">{item.meta}</span>}
                </span>
                <StatusBadge status={item.status} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-4 text-center border-t border-border-custom relative z-10">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline transition-colors duration-200"
          >
            {viewAllText} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
