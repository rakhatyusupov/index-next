import Link from "next/link";
import Button from "@/components/Button/Button";
import { NavLink } from "@/components/Link/Link";

export default function Home() {
  return (
    <>
      <h1> welcome home</h1>
      <NavLink href="/cases">кейсы</NavLink>
      <NavLink href="./studies">стадис</NavLink>
      <NavLink href="./who">кто</NavLink>
      <Button href="./about">о проекте</Button>
    </>
  );
}
