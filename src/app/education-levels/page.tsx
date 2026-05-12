import { EducationLevelsPage } from "@/views/EducationLevelsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs by Education Level : Government Jobs for All Qualifications",
  description:
    "Find government jobs based on your educational qualification. 10th Pass, 12th Pass, Graduate, ITI, Diploma, B.Tech and more.",
};

export default function Page() {
  return <EducationLevelsPage />;
}
