import { Metadata } from "next";
import { NotFoundScreen } from "@/screens/NotFound";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex-auto">
      <NotFoundScreen />
    </main>
  );
}
