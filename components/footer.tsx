import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center py-16 bg-[#0f2530] text-[#e8dcc8]">
      <h2 className="text-3xl font-bold">Hit me up!</h2>
      <div className="flex gap-6 text-lg underline">
        <Link href="mailto:timdecillis@gmail.com">Gmail</Link>
        <Link href="https://github.com/timdecillis">GitHub</Link>
        <Link href="https://www.linkedin.com/in/tim-decillis/">LinkedIn</Link>
      </div>
    </footer>
  );
};
