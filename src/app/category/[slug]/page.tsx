import { notFound } from "next/navigation";

// Category pages have moved to root-level routes: /current-job, /railway, etc.
// Visiting /category/[slug] now returns 404.
export default function Page() {
  notFound();
}
