import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

export default function PortfolioPage() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the portfolio page.</p>
    </div>
  );
}