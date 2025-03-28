import { HomeScreen } from "@/screens/Home";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Alejandro Reyna - Home",
  description: "Hi, I'm Alejandro Reyna, a software engineer with a passion for building web applications. Welcome to my portfolio!",
};

export default function Home() {
  return (
    <main>
      <HomeScreen />
    </main>
  );
}
