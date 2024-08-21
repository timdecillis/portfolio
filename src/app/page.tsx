import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>HOME PAGE</h1>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
