import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Freeman Yiu | Autonomous Systems, ML & Software Engineering",
  description:
    "Freeman Yiu's portfolio featuring autonomous vehicles, robotics, machine learning, data science, and software engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>

    </html>
  )
}
