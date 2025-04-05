export const metadata = {
  title: "Index",
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
      </body>
      <footer>footer component</footer>
    </html>
  );
}
