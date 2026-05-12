import { postDetails } from "@/data/posts";
import { PostDetailPage } from "@/views/PostDetailPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(postDetails).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = postDetails[slug];

  if (!post) {
    return { title: "404 – Post Not Found" };
  }

  return {
    title: `${post.title} : Full Details, Notification, Apply Online`,
    description: `Get full details about ${post.title}. Apply online, download notification, check eligibility, salary and important dates.`,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = postDetails[slug];

  if (!post) {
    notFound();
  }

  return <PostDetailPage slug={slug} />;
}
