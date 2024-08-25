import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto px-2 md:px-16 lg:px-32 max-w-full">
        {children}
      </body>
    </html>
  );
}
