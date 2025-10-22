import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yrmih Ian | Software Developer",
  description: "Portfólio pessoal de Ian Gonçalves",
  icons: {
    icon: [
      { url: "/favicon/icons8-tigre-64.png", sizes: "64x64", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
