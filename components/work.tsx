const workItems = [
  {
    company: "Heyo",
    title: "Front End Engineer",
    date: "11/24 - present",
    description:
      "Development of content-driven website solutions for a variety of technology companies.",
    points: [
      { text: "Create intuitive UX in ", bold: "React/Next.js", after: " and ", bold2: "Webflow", after2: " via pixel-perfect translations of ", bold3: "Figma", after3: " prototypes" },
      { text: "Utilize ", bold: "GSAP", after: " for complex scroll-based animation and custom ", bold2: "Tailwind CSS", after2: " utility classes for styling" },
      { text: "Revise and iterate on projects by promptly responding to client feedback" },
    ],
  },
  {
    company: "Think Round, Inc",
    title: "Full Stack Engineer Intern",
    date: "10/23 - 09/2024",
    description:
      "Development of the Virtual Center for the Human Family, a web application showcasing the vision for a proposed multi-purpose space in San Francisco to enrich and serve the community.",
    points: [
      { bold: "Collaborate", after: " with artists, UX/UI designers, and 3D animators to design and implement new features" },
      { bold: "Translate Figma wireframes", after: " into responsive web design, creating interactive tools that allow users to interact with the site" },
      { bold: "Participate", after: " in debugging, code reviews, and thorough testing to ensure the delivery of high-quality user experiences" },
    ],
  },
  {
    company: "Jamuary.fm",
    title: "Full Stack Engineer",
    date: "12/23 - 2/23",
    description:
      "Development of a web app for allowing friends to share music recordings with each other, supplying daily inspirational prompts and hosting audio uploads.",
    points: [
      { text: "Develop advanced features using ", bold: "SvelteKit", after: ", including uploading/downloading audio and update/delete capabilities for authorized users" },
      { text: "Submit pull requests for code review by senior team members to ensure adherence to programming best practices" },
    ],
  },
];

const superbox = {
  name: "Superbox Mobile App",
  description:
    " - provided a feature-rich mobile sales app for comics and related media, including a marketplace for browsing listings, a cart for managing purchases, and a profile page for managing user settings.",
  points: [
    { text: "Collaborated with 7 engineers in an ", bold: "Agile", after: " environment to decide project architecture, ", bold2: "Git", after2: " workflow (including code reviews), daily stand up times, and division of labor" },
    { text: "Increased efficiency by reducing API calls by 66% through leveraging of ", bold: "useContext" },
    { text: "Completed client deliverables ~25% faster by building reusable custom components with ", bold: "React-Native" },
  ],
};

const skills = [
  {
    area: "Frontend",
    technologies: "JavaScript | TypeScript | React | Redux | Next.js | Svelte | Tailwind CSS",
  },
  {
    area: "Backend",
    technologies: "Node.js | Express | Python | Flask | Django | PostgreSQL | MongoDB | MySQL",
  },
  {
    area: "Testing/Deployment",
    technologies: "Jest | Cypress | Playwright | AWS EC2, S3 | NGINX | Docker | Loader.io",
  },
  {
    area: "Developer",
    technologies: "Git/Github | Webpack | Babel | Agile Methodology",
  },
];

type BulletPoint = {
  text?: string;
  bold?: string;
  after?: string;
  bold2?: string;
  after2?: string;
  bold3?: string;
  after3?: string;
};

const BulletText = ({ point }: { point: BulletPoint }) => (
  <li className="mb-2">
    {point.text}
    {point.bold && <strong>{point.bold}</strong>}
    {point.after}
    {point.bold2 && <strong>{point.bold2}</strong>}
    {point.after2}
    {point.bold3 && <strong>{point.bold3}</strong>}
    {point.after3}
  </li>
);

export const Work = () => {
  return (
    <div className="px-16 py-20">
      <div className="flex flex-col md:flex-row gap-16 mb-20">
        <div className="md:w-1/3">
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <div className="md:w-2/3">
          {workItems.map((item, i) => (
            <div className={i > 0 ? "mt-10" : ""} key={i}>
              <h2 className="text-lg font-bold">
                {item.company} | {item.title} | {item.date}
              </h2>
              <p className="mt-3">{item.description}</p>
              <ul className="list-disc list-outside ml-8 mt-3">
                {item.points.map((point, j) => (
                  <BulletText key={j} point={point} />
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-10">
            <p>
              <strong>{superbox.name}</strong>
              {superbox.description}
            </p>
            <ul className="list-disc list-outside ml-8 mt-3">
              {superbox.points.map((point, j) => (
                <BulletText key={j} point={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h1 className="text-5xl font-bold">Skills/Tech</h1>
        </div>
        <div className="md:w-2/3 flex flex-col gap-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold">{skill.area}</h2>
              <p>{skill.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
