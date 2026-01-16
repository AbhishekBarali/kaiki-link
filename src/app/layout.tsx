import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAIKI Link - Your Link in Bio",
  description: "Create a beautiful link-in-bio page in seconds. Share all your links with one URL.",
  keywords: ["link in bio", "linktree alternative", "bio link", "social links"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
