import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ida bagus perawita yasa",
  description: "Hi evrey one wellcome to my portofolio pages i hove evrey body like my portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`font-source-code antialiased background max-h-full `}
      >
        {children}
      </body>
    </html>
  );
}
