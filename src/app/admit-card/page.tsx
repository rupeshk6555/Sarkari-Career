"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { admitCards } from "@/data/jobs";

export default function AdmitCardPage() {
  return <GenericSectionPage title="Admit Card" jobs={admitCards} />;
}
