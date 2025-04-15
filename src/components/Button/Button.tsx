import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <>
      <button className={styles.test}>
        <a href={href}>{children}</a>
      </button>
    </>
  );
}
