import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>HOME PAGE</h1>
      <Image width={500} height={500} src={"/Sibley (1).jpg"} />
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
