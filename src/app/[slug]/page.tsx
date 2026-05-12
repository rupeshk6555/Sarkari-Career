import { notFound } from "next/navigation";
import { StatePage } from "@/views/StatePage";
import { EducationLevelPage } from "@/views/EducationLevelPage";
import { CategoryPage } from "@/views/CategoryPage";
import { educationLevels } from "@/data/education";
import { states } from "@/data/states";
import { categoryMeta } from "@/data/jobs";
import { Metadata } from "next";

function getStateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const eduParams = educationLevels.map(({ slug }) => ({ slug }));
  const stateParams = states.map((state) => ({
    slug: getStateSlug(state.name),
  }));
  const categoryParams = Object.keys(categoryMeta).map((slug) => ({ slug }));
  return [...eduParams, ...stateParams, ...categoryParams];
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const isEducationLevel = educationLevels.some(
    (edu) => edu.slug === params.slug,
  );
  const isState = states.some((s) => getStateSlug(s.name) === params.slug);
  const isCategory = params.slug in categoryMeta;

  if (!isEducationLevel && !isState && !isCategory) {
    return { title: "404 – Page Not Found" };
  }

  if (isCategory) {
    const meta = categoryMeta[params.slug];
    return {
      title: `${meta.title} : Latest Government Jobs & Notifications`,
      description: meta.description,
    };
  }

  if (isEducationLevel) {
    const edu = educationLevels.find((e) => e.slug === params.slug);
    return {
      title: `${edu?.label} Jobs : Latest Government Jobs, Vacancies`,
      description:
        edu?.description || `Latest government jobs for ${edu?.label}.`,
    };
  }

  const formattedStateName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedStateName} : Latest Job, Admit Card, Result, Syllabus`,
    description: `Latest government jobs, admit cards, results, syllabus and updates for ${formattedStateName}.`,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const isEducationLevel = educationLevels.some(
    (edu) => edu.slug === params.slug,
  );
  const isState = states.some((s) => getStateSlug(s.name) === params.slug);
  const isCategory = params.slug in categoryMeta;

  if (!isEducationLevel && !isState && !isCategory) {
    notFound();
  }

  if (isCategory) {
    return <CategoryPage slug={params.slug} />;
  }

  if (isEducationLevel) {
    return <EducationLevelPage slug={params.slug} />;
  }

  return <StatePage stateName={params.slug} />;
}
