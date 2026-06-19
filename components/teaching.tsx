const teachingExperience = [
  {
    school: "Cadenza School of Music",
    location: "Alameda, CA",
    dates: "2024-present",
  },
  {
    school: "Moderntone Studios",
    location: "Lafayette, CA",
    dates: "2018-2023",
  },
  { school: "Music N' Beyond", location: "Dublin, CA", dates: "2014-2023" },
  {
    school: "Independant Instructor",
    location: "Various Locations",
    dates: "2007-2026",
  },
];

export const Teaching = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 py-20">
      <div className="md:w-1/2">
        <p className="text-lg leading-relaxed text-center md:text-left">
          During my time as a music teacher, I have honed my adept communication
          and interpersonal abilities, enabling me to effectively convey complex
          technical concepts to any audience. I foster an inclusive learning
          environment, adapting my teaching style to various learning
          preferences and ensuring the success of students with diverse
          backgrounds.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Teaching Experience</h2>
        <ul className="flex flex-col items-center gap-6 text-lg mb-8">
          {teachingExperience.map((exp) => (
            <li key={exp.school} className="text-center">
              <div className="text-lg font-bold">{exp.school}</div>
              <div>{exp.location}</div>
              <div>{exp.dates}</div>
            </li>
          ))}
        </ul>
        <div className="w-full max-w-lg aspect-video">
          <iframe
            src="https://www.youtube.com/embed/GclnLRT1_OQ"
            title="Tim DeCillis Drum Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
