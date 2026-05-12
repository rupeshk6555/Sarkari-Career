"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { latestUpdates } from "@/data/jobs";

export default function LatestUpdatesPage() {
  return <GenericSectionPage title="Latest Updates" jobs={latestUpdates} />;
}
