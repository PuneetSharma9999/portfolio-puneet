import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Full-stack developer portfolio landing page",
}

export default function Home() {
  return <Portfolio />
}

