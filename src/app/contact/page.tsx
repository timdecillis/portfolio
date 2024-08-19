import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>CONTACT PAGE</h1>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </main>
  );
}