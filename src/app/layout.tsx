import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ian Gonçalves | Portfólio",
  description: "Portfólio pessoal de Ian Gonçalves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-gray-900 text-white"
      >
        {children}
      </body>
    </html>
  );
}
