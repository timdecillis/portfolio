import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "The Nathan Clevenger Group",
    href: "https://nathanclevenger.bandcamp.com/",
  },
  { name: "Sucker Crush", href: "https://suckercrush.bandcamp.com/" },
  { name: "Rex Ruit", href: "https://rexruit.bandcamp.com/track/fishbowl-way" },
  { name: "Free Key Choir", href: "https://freekeychoir.webflow.io/" },
  {
    name: "Birds & Balls",
    href: "https://www.sfcv.org/articles/review/parallel-play-birds-balls",
  },
  {
    name: "Ariel Wang",
    href: "https://arielwangmusic.bandcamp.com/album/bridges",
  },
  {
    name: "Rachel Lark and the Damaged Goods",
    href: "https://rachellark.bandcamp.com/",
  },
];

export const Music = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 py-20">
      <div className="md:w-1/2 flex flex-col items-center">
        <p className="text-lg leading-relaxed mb-8">
          With a career spanning Las Vegas, Chicago, and all parts of the San
          Francisco Bay area, I have had the pleasure of playing all manner of
          music with a diverse array of inspiring artists.
        </p>
        <Image
          src="/vibraphone.jpg"
          alt="Tim playing vibraphone"
          width={600}
          height={400}
          className="w-full max-w-lg"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Recent Projects</h2>
        <ul className="flex flex-col items-center gap-4 text-xl">
          {projects.map((project) => (
            <li key={project.name}>
              <Link
                href={project.href}
                className="underline underline-offset-4"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
