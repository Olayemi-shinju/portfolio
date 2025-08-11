import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Databases", icon: <FaDatabase className="text-indigo-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-400 mb-12"
        >
          Skills
        </motion.h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 flex flex-col items-center shadow-lg"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
