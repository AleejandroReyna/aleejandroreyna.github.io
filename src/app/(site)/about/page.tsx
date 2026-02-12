// Dependencies
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Test",
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}