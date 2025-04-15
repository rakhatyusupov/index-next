import "./global.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav/Nav";

const InterTight = localFont({
  src: "../../../public/fonts/InterTight-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "INDEX",
    template: "%s | Index",
  },

  description: "Медиа об арт-институциях",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={InterTight.className}>
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
