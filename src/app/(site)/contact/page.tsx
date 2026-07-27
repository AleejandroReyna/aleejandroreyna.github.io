import { Metadata } from "next";
import { ContactScreen } from "@/screens/Contact";

export const metadata : Metadata = {
  title: "Contact",
  description: "Get in touch with Alejandro Reyna, Full-Stack Developer, for remote software engineering opportunities and project inquiries.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-auto">
      <ContactScreen />
    </main>
  );
}
