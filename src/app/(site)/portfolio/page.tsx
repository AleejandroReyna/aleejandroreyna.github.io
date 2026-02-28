import { Metadata } from "next";

import { PortfolioScreen } from "@/screens/Portfolio";

export const metadata : Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

interface Props {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PortfolioPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <PortfolioScreen searchParams={resolvedSearchParams} />
    </main>
  );
}
