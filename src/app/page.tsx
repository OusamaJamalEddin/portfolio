import Image from "next/image";
import Projects from "./Projects";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,120,0.1),transparent_50%)]"></div>
      
      {/* Hero Section */}
      <div className="relative z-10">
        <main className="max-w-4xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
          {/* About Me Section */}
          <section className="bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-12 flex flex-col items-center text-center mb-16 shadow-xl">
            
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="w-full h-full bg-gray-800 rounded-full p-3">
                  <Image
                    src="/profile.jpg"
                    alt="Profile photo of Ousama Jamal Eddin"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                Ousama Jamal Eddin
              </h1>
              
              <div className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium text-lg mb-6">
                Software Developer
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { name: "Flutter", color: "bg-blue-600 hover:bg-blue-500" },
                  { name: "Python", color: "bg-green-600 hover:bg-green-500" },
                  { name: "Unity", color: "bg-gray-600 hover:bg-gray-500" },
                  { name: "Laravel", color: "bg-red-600 hover:bg-red-500" }
                ].map((tech) => (
                  <span key={tech.name} className={`px-4 py-2 rounded-lg ${tech.color} text-white text-sm font-medium transition-colors duration-200 cursor-default`}>
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-400 mb-8 text-lg">
                23 years old • Building the future
              </p>
              
              {/* Description */}
              <div className="max-w-3xl space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Passionate about building <span className="text-blue-400 font-semibold">successful</span>, 
                  <span className="text-purple-400 font-semibold"> responsive</span>, and 
                  <span className="text-green-400 font-semibold"> lightning-fast</span> apps and websites.
                </p>
                <p>
                  Currently learning <span className="text-blue-400 font-semibold">Laravel/Blade</span> and developing a website to provide specific home services for people.
                </p>
                <p>
                  All my projects are available on my GitHub account, including multiple Flutter apps, Python projects, and a Unity Flappy Bird clone.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-16 shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile Development</h3>
                <p className="text-gray-400 text-sm">Flutter, Dart, Cross-platform apps, State management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend Development</h3>
                <p className="text-gray-400 text-sm">Python, Laravel, API development, Database design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Game Development</h3>
                <p className="text-gray-400 text-sm">Unity, C#, 2D games, Physics systems</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-12 mb-16 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Featured Projects
            </h2>
            <Projects />
          </section>

          {/* Contact Section */}
          <section className="bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              Let's Connect
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-6 md:space-y-0 mb-8">
              <a
                href="https://github.com/OusamaJamalEddin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:ossama.jamal.aldien@gmail.com"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ousama-jamal-eddin-5a1b3a238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.604v5.592z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              Open to new opportunities and collaborations
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
