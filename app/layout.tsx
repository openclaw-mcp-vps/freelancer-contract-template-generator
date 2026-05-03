import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractForge – AI Freelancer Contract Generator",
  description: "Generate custom freelance contracts with state compliance in seconds. AI-powered, legally sound, tailored to your project."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="961e99fc-6f26-44f9-9ed4-2d7e05a240f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
