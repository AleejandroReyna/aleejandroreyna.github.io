import { Metadata } from "next";
import { ContactScreen } from "@/screens/Contact";

export const metadata : Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function ContactPage() {
  return (
    <main className="flex flex-auto">
      <ContactScreen />
    </main>
  );
}