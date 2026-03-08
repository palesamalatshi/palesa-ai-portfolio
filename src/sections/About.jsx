function About() {
  return (
    <section className="px-6 py-24 bg-black/30 backdrop-blur-md text-white">

      <div className="max-w-4xl mx-auto text-center space-y-12">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Me
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-500">

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
            Hi, I'm <span className="text-purple-400 font-semibold">Palesa Malatshi</span> — 
            a passionate frontend developer who loves turning ideas into interactive, user-friendly web experiences.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
            I’m currently completing a Software Development Bootcamp at CodeSpace, building projects with JavaScript, React, and modern frontend tools.
            I enjoy experimenting with UI/UX design, crafting reusable components,
            and improving how applications feel and behave for users.
          </p>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Beyond coding, I’ve collaborated with small businesses to manage websites, digital tools, and online presence.
            I’m driven to grow as a developer and contribute to meaningful, high-quality digital products.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;