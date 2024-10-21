import React from 'react';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      <Helmet>
        <title>Ian James Arnott - Software Engineer & Game Developer</title>
        <meta name="description" content="Portfolio of Ian James Arnott, Software Engineering Student at ITBA and Game Developer" />
      </Helmet>

      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ian James Arnott</h1>
          <p className="text-xl md:text-2xl">Fifth-year Software Engineering Student at ITBA | Game Developer</p>
        </div>
      </header>

      <nav className="bg-gray-800 text-white py-4 sticky top-0 z-10">
        <ul className="container mx-auto px-4 flex justify-center space-x-8">
          <li><a href="#about" className="hover:text-blue-300 transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition duration-300">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="mb-4">
              I am a fifth-year Software Engineering student at ITBA, passionate about game development, including gameplay scripting, event systems, animation, and modeling in both 2D and 3D. I also explore XR, UX/UI design, web development, and mobile apps.
            </p>
            <p>
              I love learning and look forward to creating new and innovative experiences in game development. Whether it's through scripting fun and complex mechanics or developing immersive VR experiences, I am always eager to push boundaries in the field.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Blood of Kvasir VR",
                description: "A short escape room game for the Quest 2, my first VR project and the first game I ever made.",
                link: "https://github.com/Ian-Arnott/Blood-of-Kvasir-VR"
              },
              {
                title: "Dark Ocean",
                description: "A short sci-fi horror game inspired by Slender Man.",
                link: "https://github.com/Ian-Arnott/Dark-Ocean"
              },
              {
                title: "GameJam 2023 PampaPixel",
                description: "A platformer created during a game jam, where the character uses a \"Twist\" ability to complete levels. This project taught me how to manage time and resources effectively.",
                link: "https://github.com/Ian-Arnott/GameJam-2023-PampaPixel"
              },
              {
                title: "The Light Within",
                description: "\"The Light Within\" is my first full game, a project developed for ITBA's course \"Desarrollo Integral de Videojuegos.\" It will be released in December 2024 on itch.io.",
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={project.link} className="text-blue-600 hover:underline">{project.title}</a>
                </h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-6">You can reach me at <a href="mailto:ianjamesarnott@gmail.com" className="text-blue-300 hover:underline">ianjamesarnott@gmail.com</a> or find me on <a href="https://www.linkedin.com/in/ian-arnott-755808207/" className="text-blue-300 hover:underline">LinkedIn</a>.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:ianjamesarnott@gmail.com" className="text-white hover:text-blue-300 transition duration-300">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ian-arnott-755808207/" className="text-white hover:text-blue-300 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Ian-Arnott" className="text-white hover:text-blue-300 transition duration-300">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Ian James Arnott</p>
        </div>
      </footer>
    </div>
  );
}

export default App;