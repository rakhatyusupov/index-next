import React from "react";

export default function casesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Cases</h2>
    </>
  );
}
