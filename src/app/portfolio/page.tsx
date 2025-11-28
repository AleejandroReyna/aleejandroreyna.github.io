import { Metadata } from "next";

import { PortfolioScreen } from "@/screens/Portfolio";

export const metadata : Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioScreen />
    </main>
  );
}