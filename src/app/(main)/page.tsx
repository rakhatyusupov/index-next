import { NavLink } from "@/components/Link/Link";

export default function Home() {
  return (
    <>
      <h1> welcome home</h1>
      <NavLink href="/cases">кейсы</NavLink>
      <NavLink href="./studies">стадис</NavLink>
      <NavLink href="./who">кто</NavLink>
      <NavLink href="./about">о проекте</NavLink>
    </>
  );
}
