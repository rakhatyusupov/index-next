import { NavLink } from "@/components/Link/Link";

export default function Home() {
  return (
    <>
      <NavLink href="/cases">кейсы</NavLink>
      <NavLink href="./studies">стадис</NavLink>
      <NavLink href="./who">кто</NavLink>
      <NavLink href="./about">о проекте</NavLink>
    </>
  );
}
