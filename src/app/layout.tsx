// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Landing Page Pribadi",
  description: "Website pribadi saya dengan Next.js dan TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
