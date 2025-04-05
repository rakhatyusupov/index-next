import Link from "next/link";
import Button from "@/components/A_Button/Button";

export default function Home() {
  return (
    <>
      <h1> welcome home</h1>
      <Link href="./cases">cases</Link>
      <Link href="./studies">studies</Link>
      <Link href="./about">about</Link>
      <Link href="./who">who</Link>
      <Button></Button>
    </>
  );
}
