"use client";

import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Link.module.css";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href} className={styles.NavLink}>
      {children}
    </Link>
  );
};
