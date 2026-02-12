import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Services",
  description: "Services page description",
}

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <p>This is the services page</p>
    </div>
  )
}