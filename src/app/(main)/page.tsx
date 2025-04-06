import Link from "next/link";
import Button from "@/components/A_Button/Button";
import { NavLink } from "@/components/A_Link/Link";

export default function Home() {
  return (
    <>
      <h1> welcome home</h1>
      <Link href="./cases">cases</Link>
      <Link href="./studies">studies</Link>
      <NavLink href="/about">О нас</NavLink>
      <Link href="./who">who</Link>
      <Button></Button>
    </>
  );
}
