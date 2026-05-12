"use client";

import { GenericSectionPage } from "@/views/GenericSectionPage";
import { answerKeys } from "@/data/jobs";

export default function AnswerKeyPage() {
  return <GenericSectionPage title="Answer Keys" jobs={answerKeys} />;
}
