import React from 'react';
import { FaGithub } from 'react-icons/fa';

const hardcodedProjects = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my resume, projects, and skills.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
    githubLink: "https://github.com/Darla03/Final.git"
  },
  {
    title: "Meet ATU",
    description: "An interactive app that allows for users at ATU to interact with students in their registered classes, and compete amongst one another.",
    technologies: ["React", "Express", "Node.js", "Firebase"],
    githubLink: "https://github.com/curbaniATU/MeetATU.git"
  },
  {
    title: "Business Card",
    description: "A simple business card using CSS styling of box modeling and flexbox with hover links.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Darla03/WebProgramming/tree/89e71b1d809794260804145b746fdf034258d90e/Business%20Card%20"
  },
  {
    title: "Dream Board",
    description: "A dream board of my dreams.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Darla03/WebProgramming/tree/89e71b1d809794260804145b746fdf034258d90e/Dream%20Board"
  },
  {
    title: "Mood Tracker",
    description: "A website that allows you to get to know me and my moods using images or videos to express myself.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Darla03/WebProgramming/tree/89e71b1d809794260804145b746fdf034258d90e/Day%2012/mood-tracker"
  }
];

function Projects() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {hardcodedProjects.map((project, index) => (
          <div key={index} className="bg-offwhite p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2 text-gray-700">{project.description}</p>
            <p className="mb-2 text-sm text-gray-500">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-3 text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-black transition"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


{/* export default Projects;

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {proj.image && (
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-gray-700 mt-2">{proj.description}</p>
              <div className="mt-3 text-sm text-blue-600">
                Technologies: {proj.technologies.join(', ')}
              </div>
              <div className="mt-4 flex gap-4">
                {proj.githubLink && (
                  <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                    GitHub
                  </a>
                )}
                {proj.liveDemo && (
                  <a href={proj.liveDemo} target="_blank" rel="noreferrer" className="text-green-500 underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; */}
