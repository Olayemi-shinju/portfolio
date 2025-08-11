import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/wallenstein.jpeg"
            alt="Olayemi"
            className="w-100 h-72 object-cover rounded-xl shadow-lg border-4 border-slate-800"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name Section */}
          <h1 className="text-4xl font-extrabold text-gray-300 tracking-wide mb-2">
           Awoyemi Olayemi Khafid
          </h1>
          <span className="block text-sky-400 text-lg font-medium mb-6">
            Full-Stack Web Developer
          </span>

          <h2 className="text-3xl font-bold mb-6 text-sky-400">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-lg mb-4">
            I’m a passionate full-stack web developer who loves turning ideas into
            functional and visually engaging products. My core skills include
            JavaScript, React, Node.js, Express, and MongoDB, and I’ve built
            responsive, production-ready applications.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I focus on creating smooth user experiences backed by scalable
            architecture. Currently, I’m open to remote or freelance opportunities
            where I can contribute my skills and grow alongside an ambitious team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
