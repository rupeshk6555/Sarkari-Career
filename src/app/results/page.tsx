"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { results } from "@/data/jobs";

export default function ResultsPage() {
  return <GenericSectionPage title="Exam Results" jobs={results} />;
}
