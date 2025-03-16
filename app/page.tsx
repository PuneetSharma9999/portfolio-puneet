import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Puneet Sharma | Portfolio",
  description: "Full-stack developer portfolio landing page",
  icons: "/logo/ps-title-logo.png",  // Ensure favicon.ico is in the 'public' folder
}

export default function Home() {
  return <Portfolio />
}

