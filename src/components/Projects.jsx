import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-white"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl p-4 transition hover:shadow-xl"
              style={{
                background: "#1e293b",
                boxShadow: "8px 8px 16px #0b1120, -8px -8px 16px #243146",
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg mb-4 object-cover w-full h-40"
              />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-slate-300 text-sm mb-2">{p.description}</p>
              <p className="text-xs text-slate-400 mb-4">{p.tech.join(", ")}</p>

              <div className="flex items-center justify-between">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline font-medium"
                >
                  View Project →
                </a>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white ml-4"
                    aria-label={`${p.title} GitHub repository`}
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
