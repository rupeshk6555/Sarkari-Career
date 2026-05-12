"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { syllabus } from "@/data/jobs";

export default function SyllabusPage() {
  return <GenericSectionPage title="Exam Syllabus" jobs={syllabus} />;
}
