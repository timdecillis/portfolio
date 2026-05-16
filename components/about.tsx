import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 px-16 py-20">
      <div className="md:w-1/2 text-lg leading-relaxed flex flex-col justify-center">
        <p>
          I&apos;ve dedicated my life to pursuing my flow state, whether I&apos;m
          improvising on a jazz standard or coding a new app; I thrive on that
          sweet spot where creativity meets logic.
        </p>
        <br />
        <p>
          Collaboration is where I find my happy place, be it sharing the stage
          with other musicians or tackling real-world problems with agile teams,
          and over the years I&apos;ve super-charged my skills in autonomy,
          adaptability, empathy, and effective teamwork.
        </p>
        <br />
        <p>
          My ability to seamlessly blend creativity with logical problem-solving
          has been a driving force in my work, and I am eager to continuing
          leveling up my skill set by contributing to a company whose mission I
          can vibe with.
        </p>
        <br />
        <Link href="mailto:timdecillis@gmail.com" className="underline underline-offset-4 text-lg">
          Let&apos;s make cool things happen together!
        </Link>
      </div>
      <div className="md:w-1/2 flex items-start justify-center">
        <Image
          src="/sibley.jpg"
          alt="Tim DeCillis"
          width={500}
          height={600}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};
