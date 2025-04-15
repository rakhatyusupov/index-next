import styles from "./Nav.module.css";
import { NavLink } from "../Link/Link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink href="/cases">кейсы</NavLink>
      <NavLink href="/studies">стадис</NavLink>
      <NavLink href="/who">кто</NavLink>
      <NavLink href="/about">о проекте</NavLink>
    </nav>
  );
}
