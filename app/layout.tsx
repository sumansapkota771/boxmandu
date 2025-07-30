import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxmandu",
  // description: 'Created with v0',
  // generator: 'v0.dev',
  icons: {
    icon: "../images/Logo.jpg", // Or .png or .svg
  },
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
