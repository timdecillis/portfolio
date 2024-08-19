import Link from "next/link";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Projects/>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}