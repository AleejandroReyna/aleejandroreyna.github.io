import { Metadata } from "next";

import { BlogScreen } from "@/screens/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on architecture, cloud systems, and building software that lasts.",
};

interface Props {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <BlogScreen searchParams={resolvedSearchParams} />
    </main>
  );
}
