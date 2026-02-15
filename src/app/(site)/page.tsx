import { HomeScreen } from "@/screens/Home";

export const revalidate = 3600

export default function Home() {
  return (
    <main>
      <HomeScreen />
    </main>
  );
}
