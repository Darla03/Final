import React from 'react';

const educationList = [
  {
    institution: "Hope High School, Hope, Arkansas",
    degree: "High School Diploma",
    graduationYear: "May 2022",
    description: "High School Diploma."
  },
  {
    institution: "Arkansas Tech University",
    degree: "Associates of Applied Science in IT",
    graduationYear: "December 2023",
    description: "Focused on software development, databases, and web technologies."
  },
  {
    institution: "Arkansas Tech University",
    degree: "Bachelor of Science in IT",
    graduationYear: "May 2025",
    description: "Focused on software development, databases, and web technologies."
  },
  {
    institution: "University of Arkansas Hope-Texarkana",
    degree: "Certificate of Proficiency in Coding",
    graduationYear: "May 2022",
    description: "Focused on Python and HTML"
  }
];

const skillsList = [
  {
    name: "JavaScript",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    name: "Python",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "C++",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "HTML",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  }
];

function SkillsEducation() {
  return (
    <div className="p-6 space-y-12 bg-gray-100 min-h-screen">
      <div>
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {educationList.map((edu, index) => (
            <div key={index} className="bg-offwhite shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationYear}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillsList.map((skill, index) => (
            <div key={index} className="flex items-center bg-offwhite p-4 shadow-md rounded-lg">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-4" />
              <div>
                <h4 className="font-semibold">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsEducation;


/* function SkillsEducation() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  const [newEdu, setNewEdu] = useState({
    institution: '',
    degree: '',
    graduationYear: '',
    description: '',
  });

  const [newSkill, setNewSkill] = useState({
    name: '',
    level: '',
    icon: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [skillsRes, eduRes] = await Promise.all([
      axios.get('http://localhost:5000/skills'),
      axios.get('http://localhost:5000/education'),
    ]);
    setSkills(skillsRes.data);
    setEducation(eduRes.data);
  };

  const handleAddEducation = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/education', newEdu);
    setNewEdu({ institution: '', degree: '', graduationYear: '', description: '' });
    fetchData();
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/skills', newSkill);
    setNewSkill({ name: '', level: '', icon: '' });
    fetchData();
  };

  return (
    <div className="p-6 space-y-12">
    
      <div>
        <h2 className="text-2xl font-bold mb-2">Add Education</h2>
        <form onSubmit={handleAddEducation} className="grid md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded shadow">
          <input name="institution" value={newEdu.institution} onChange={e => setNewEdu({ ...newEdu, institution: e.target.value })} placeholder="Institution" required className="p-2 border rounded" />
          <input name="degree" value={newEdu.degree} onChange={e => setNewEdu({ ...newEdu, degree: e.target.value })} placeholder="Degree" required className="p-2 border rounded" />
          <input name="graduationYear" value={newEdu.graduationYear} onChange={e => setNewEdu({ ...newEdu, graduationYear: e.target.value })} placeholder="Graduation Year" required className="p-2 border rounded" />
          <textarea name="description" value={newEdu.description} onChange={e => setNewEdu({ ...newEdu, description: e.target.value })} placeholder="Description" required className="p-2 border rounded col-span-2" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2">Add Education</button>
        </form>
      </div>


      <div>
        <h2 className="text-2xl font-bold mb-2">Add Skill</h2>
        <form onSubmit={handleAddSkill} className="grid md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded shadow">
          <input name="name" value={newSkill.name} onChange={e => setNewSkill({ ...newSkill, name: e.target.value })} placeholder="Skill Name" required className="p-2 border rounded" />
          <input name="level" value={newSkill.level} onChange={e => setNewSkill({ ...newSkill, level: e.target.value })} placeholder="Skill Level" required className="p-2 border rounded" />
          <input name="icon" value={newSkill.icon} onChange={e => setNewSkill({ ...newSkill, icon: e.target.value })} placeholder="Icon URL" required className="p-2 border rounded" />
          <button type="submit" className="bg-green-600 text-white py-2 rounded col-span-3">Add Skill</button>
        </form>
      </div>

   
      <div>
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationYear}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-white p-4 shadow-md rounded-lg">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-4" />
              <div>
                <h4 className="font-semibold">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}export default SkillsEducation;   */