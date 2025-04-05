import "./global.css";
import { Metadata } from "next";

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
    <html lang="rus">
      <body>
        <nav>link</nav>
        {children}
        <footer>footer component</footer>
      </body>
    </html>
  );
}
