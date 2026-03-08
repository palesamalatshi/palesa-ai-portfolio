import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="px-6 py-24 bg-black/30 backdrop-blur-md text-white">

      <div className="max-w-4xl mx-auto text-center space-y-12">

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Connect
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          I'm always open to opportunities, collaborations,
          or conversations about web development, design, and tech.
          Let's build something amazing together!
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:palesamalatshi22@gmail.com"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 transition transform duration-300"
          >
            <FaEnvelope size={36} className="text-purple-400" />
            <p className="text-gray-200 text-lg font-semibold">Email</p>
            <span className="text-gray-400 text-sm break-all">
              palesamalatshi22@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/palesamalatshi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/40 transition transform duration-300"
          >
            <FaGithub size={36} className="text-white" />
            <p className="text-gray-200 text-lg font-semibold">GitHub</p>
            <span className="text-gray-400 text-sm break-all">
              github.com/palesamalatshi
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/palesa-malatshi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40 transition transform duration-300"
          >
            <FaLinkedin size={36} className="text-blue-400" />
            <p className="text-gray-200 text-lg font-semibold">LinkedIn</p>
            <span className="text-gray-400 text-sm">
              Connect with me
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;