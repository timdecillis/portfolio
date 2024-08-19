import Link from "next/link";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Contact/>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </main>
  );
}