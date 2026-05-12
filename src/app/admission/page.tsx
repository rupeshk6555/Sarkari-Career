"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { admissions } from "@/data/jobs";

export default function AdmissionPage() {
  return <GenericSectionPage title="Admissions" jobs={admissions} />;
}
