import resume from './assets/resume.pdf'
import { FaGithub } from 'react-icons/fa'
export default function Portfolio() {
  const projects = [
    {
      title: 'SkyReport Weather App',
      tech: 'React Native, Weather API',
      desc: 'A mobile weather application with city search, responsive UI and real-time weather updates.'
    },
    {
      title: 'Music Player',
      tech: 'HTML, CSS, JavaScript',
      desc: 'Responsive music player with playlist search, playback controls and dynamic background blur.'
    },
    {
      title: 'Credit Card Fraud Detection',
      tech: 'Python, Machine Learning',
      desc: 'Machine learning model using logistic regression to identify fraudulent card transactions.'
    },
    {
      title: 'Breast Cancer Detection',
      tech: 'Python, Neural Networks',
      desc: 'Prediction model to classify breast cancer as malignant or benign.'
    }
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'React Native',
    'Python',
    'Git',
    'Responsive UI Design',
    'Machine Learning'
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold text-purple-400">Kanupriya</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-28 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-purple-400">Kanupriya</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
          Front-End Developer & React Native Enthusiast passionate about building responsive web and mobile applications.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg">
            View Projects
          </button>

          <a
            href={resume}
            download
            className="border border-purple-400 hover:bg-purple-500 px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-purple-400 mb-8">About Me</h2>

        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800">
          <p className="text-lg text-gray-300 leading-8">
            Computer Science graduate from Graphic Era Hill University with a strong passion for Front-End Development and React Native applications. Skilled in creating responsive user interfaces using React, JavaScript and modern web technologies.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-5">
            I also have experience in Machine Learning projects including fraud detection and deep learning-based sentiment analysis.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-purple-400 mb-4">{project.tech}</p>

              <p className="text-gray-300 leading-7">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-20 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Experience</h2>

        <div className="space-y-8">
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold">Oasis Infobyte</h3>
            <p className="text-purple-400 mb-3">Web Development Intern</p>
            <p className="text-gray-300">
              Worked on projects like calculator app, tribute page and to-do list using HTML, CSS and JavaScript.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold">Octanet</h3>
            <p className="text-purple-400 mb-3">Web Development Intern</p>
            <p className="text-gray-300">
              Developed front-end web projects and improved responsive design skills.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold">Honeywell CSR Program</h3>
            <p className="text-purple-400 mb-3">RPA Trainee</p>
            <p className="text-gray-300">
              Worked on Email Auto Responder and Stock Price Trend Comparison using UiPath.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Amazon ML Summer School</h3>
            <p className="text-gray-300">
              Selected for Amazon ML Summer School 2023.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">IEEE Research Publication</h3>
            <p className="text-gray-300">
              Co-authored research paper on RNNs, GRUs and LSTMs published in IEEE Xplore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Contact</h2>

        <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 max-w-3xl mx-auto text-center shadow-xl">
          <p className="text-lg text-gray-300 mb-6">
            Interested in working together or discussing opportunities?
          </p>

          <div className="space-y-4 text-lg">
            <p>Email: kanupriyathakur1101@gmail.com</p>
            <p>GitHub: github.com/kanupriya1103</p>
            
          </div>

          <button className="mt-8 bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg">
            Let's Connect
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Kanupriya Thakur. All rights reserved.
      </footer>
    </div>
  );
}
