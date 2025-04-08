import Link from "next/link";
import Button from "@/components/A_Button/Button";
import { NavLink } from "@/components/A_Link/Link";

export default function Home() {
  return (
    <>
      <h1> welcome home</h1>
      <NavLink href="/cases">cases</NavLink>
      <NavLink href="./studies">studies</NavLink>
      <NavLink href="./about">О нас</NavLink>
      <NavLink href="./who">who</NavLink>
      <Button href="./about">PENIS</Button>
    </>
  );
}
