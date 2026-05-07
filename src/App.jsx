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
    <div className="bg-[#0F172A] text-white min-h-screen font-sans overflow-hidden">

      
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 sticky top-0 bg-[#0F172A]/80 backdrop-blur-lg z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Kanupriya
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>
      </nav>

     
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-36 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E1B4B]">

        <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative z-10">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Kanupriya
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed relative z-10">
          Front-End Developer & React Native Enthusiast passionate about building modern responsive web and mobile applications.
        </p>

        <div className="flex gap-5 flex-wrap justify-center relative z-10">

          <a
            href="#projects"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
          >
            View Projects
          </a>

          <a
            href={resume}
            download
            className="border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-purple-500 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
          >
            Download Resume
          </a>

        </div>
      </section>

    
      <section id="about" className="px-8 md:px-20 py-24">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">
          <p className="text-lg text-gray-300 leading-8">
            Computer Science graduate from Graphic Era Hill University with strong passion for Front-End Development and React Native applications.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-5">
            Skilled in React, JavaScript, Python and modern web technologies with experience in responsive UI development and machine learning projects.
          </p>
        </div>
      </section>

     
      <section id="skills" className="px-8 md:px-20 py-24 bg-[#111827]">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:scale-105 hover:border-purple-400 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}

        </div>
      </section>

   
      <section id="projects" className="px-8 md:px-20 py-24">

        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-[1.02] hover:border-purple-500 transition-all duration-300 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-pink-400 mb-4">{project.tech}</p>

              <p className="text-gray-300 leading-7">{project.desc}</p>
            </div>
          ))}

        </div>
      </section>

     
      <section className="px-8 md:px-20 py-24 bg-[#111827]">

        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">

          {[
            {
              company: 'Oasis Infobyte',
              role: 'Web Development Intern',
              desc: 'Worked on calculator app, tribute page and to-do list using HTML, CSS and JavaScript.'
            },
            {
              company: 'Octanet',
              role: 'Web Development Intern',
              desc: 'Developed front-end projects and improved responsive design skills.'
            },
            {
              company: 'Honeywell CSR Program',
              role: 'RPA Trainee',
              desc: 'Worked on Email Auto Responder and Stock Price Trend Comparison using UiPath.'
            }
          ].map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <p className="text-pink-400 mb-3">{exp.role}</p>
              <p className="text-gray-300">{exp.desc}</p>
            </div>
          ))}

        </div>
      </section>

     
      <section id="contact" className="px-8 md:px-20 py-24">

        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl max-w-3xl mx-auto text-center shadow-2xl">

          <p className="text-lg text-gray-300 mb-8">
            Interested in working together or discussing opportunities?
          </p>

          <div className="space-y-4 text-lg">

            <p>
              Email: 
              <span className="text-pink-400">
                {' '}kanupriyathakur1101@gmail.com
              </span>
            </p>

            <a
              href="https://github.com/kanupriya1103"
              target="_blank"
              className="flex items-center justify-center gap-3 hover:text-pink-400 transition"
            >
              <FaGithub />
              github.com/kanupriya1103
            </a>

          </div>

          <a
            href="mailto:kanupriyathakur1101@gmail.com"
            className="inline-block mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
          >
            Let's Connect
          </a>

        </div>
      </section>

     
      <footer className="text-center py-8 border-t border-white/10 text-gray-400">
        © 2026 Kanupriya Thakur. All rights reserved.
      </footer>

    </div>
  );
}