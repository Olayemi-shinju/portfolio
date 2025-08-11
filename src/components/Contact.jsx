export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-300 text-lg mb-10">
          Whether you have a question, a project proposal, or just want to connect,
          I’d be happy to hear from you. Please reach out and I’ll respond promptly.
        </p>
        <div className="inline-block border border-sky-500 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300">
          <a
            href="mailto:awoyemiolayemi27@gmail.com"
            className="block bg-sky-500 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-sky-400 transition-colors duration-300"
          >
            📧 Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
