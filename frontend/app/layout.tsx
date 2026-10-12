import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synthetic Intelligence Education",
  description: "Math learning platform with AI-assisted tutoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
