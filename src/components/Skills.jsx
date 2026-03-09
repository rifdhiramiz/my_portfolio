import { FaLaptopCode, FaServer, FaDatabase, FaPaintBrush, FaCode } from "react-icons/fa";
import { SiFigma, SiCanva, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export default function Skills() {
  // Compact skillCard (less padding, inline feel)
  const skillCard = (IconComponent, color, name) => (
    <div className="flex items-center space-x-2 bg-secondary px-3 py-2 rounded-lg shadow hover:scale-105 transform transition duration-300">
      {typeof IconComponent === "string" ? (
        <i className={`${IconComponent} text-lg`} style={{ color }}></i>
      ) : (
        <IconComponent className="text-lg" style={{ color }} />
      )}
      <h3 className="text-base font-semibold text-gray-400">{name}</h3>
    </div>
  );

  const sections = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "text-gold",
      key: "programming",
      skills: [
        ["fab fa-php", "#FFFFFF", "PHP"],
        ["fab fa-java", "#FFFFFF", "Java"],
        ["fab fa-microsoft", "#FFFFFF", "C#"],
      ],
    },
    {
      title: "Web Development",
      icon: FaLaptopCode,
      color: "text-gold",
      key: "webdev",
      skills: [
        ["fab fa-html5", "#FFFFFF", "HTML"],
        ["fab fa-css3-alt", "#FFFFFF", "CSS"],
        ["fab fa-bootstrap", "#FFFFFF", "Bootstrap"],
        ["fab fa-css3-alt", "#FFFFFF", "Tailwind CSS"],
        ["fab fa-js-square", "#FFFFFF", "JavaScript"],
        ["fab fa-js-square", "#FFFFFF", "TypeScript"],
      ],
    },
    {
      title: "Frontend Frameworks",
      icon: FaLaptopCode,
      color: "text-gold",
      key: "frontend",
      skills: [
        ["fab fa-react", "#FFFFFF", "React"],
        ["fab fa-angular", "#FFFFFF", "Angular"],
      ],
    },
    {
      title: "Backend Frameworks",
      icon: FaServer,
      color: "text-gold",
      key: "backend",
      skills: [
        ["fab fa-laravel", "#FFFFFF", "Laravel"],
        ["fab fa-node", "#FFFFFF", "Node.js"],
        ["fab fa-node-js", "#FFFFFF", "Express.js"],
      ],
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      color: "text-gold",
      key: "database",
      skills: [
        ["fas fa-database", "#FFFFFF", "MySQL"],
        ["fas fa-database", "#FFFFFF", "MS SQL"],
        ["fas fa-leaf", "#FFFFFF", "MongoDB"],
      ],
    },
    {
      title: "Design Tools",
      icon: FaPaintBrush,
      color: "text-gold",
      key: "design",
      skills: [
        [SiFigma, "#FFFFFF", "Figma"],
        [SiCanva, "#FFFFFF", "Canva"],
        [SiAdobephotoshop, "#FFFFFF", "Adobe Photoshop"],
        [SiAdobeillustrator, "#FFFFFF", "Adobe Illustrator"],
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-8 py-16 bg-darkblue text-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gold mb-6">
        My Skills
      </h1>
      <div className="w-24 h-1 bg-gold mx-auto mb-12 rounded-full"></div>

      <p className="mb-10 text-center text-white text-2xl">
        Technologies and tools I work with 💻
      </p>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* First Row: Programming + Web Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(0, 2).map((section) => (
            <div key={section.key} className="bg-[#1f2b3d] rounded-2xl shadow-lg p-4">
              <div className={`flex items-center text-xl font-semibold mb-4 ${section.color}`}>
                <section.icon className="mr-2" />
                <span>{section.title}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((s, idx) => skillCard(...s))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Frontend + Backend Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(2, 4).map((section) => (
            <div key={section.key} className="bg-[#1f2b3d] rounded-2xl shadow-lg p-4">
              <div className={`flex items-center text-xl font-semibold mb-4 ${section.color}`}>
                <section.icon className="mr-2" />
                <span>{section.title}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((s, idx) => skillCard(...s))}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row: Database + Design Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(4, 6).map((section) => (
            <div key={section.key} className="bg-[#1f2b3d] rounded-2xl shadow-lg p-4">
              <div className={`flex items-center text-xl font-semibold mb-4 ${section.color}`}>
                <section.icon className="mr-2" />
                <span>{section.title}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((s, idx) => skillCard(...s))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}