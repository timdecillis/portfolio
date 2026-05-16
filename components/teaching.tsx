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
];

export const Teaching = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 px-16 py-20">
      <div className="md:w-1/2">
        <p className="text-2xl md:text-3xl font-bold leading-relaxed">
          During my time as a music teacher, I have honed my adept communication
          and interpersonal abilities, enabling me to effectively convey complex
          technical concepts to any audience. I foster an inclusive learning
          environment, adapting my teaching style to various learning
          preferences and ensuring the success of students with diverse
          backgrounds.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Teaching Experience</h2>
        <ul className="flex flex-col items-center gap-2 text-lg mb-8">
          {teachingExperience.map((exp) => (
            <li key={exp.school}>
              {exp.school} | {exp.location} | {exp.dates}
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
