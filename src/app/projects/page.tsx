import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>PROJECTS PAGE</h1>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}