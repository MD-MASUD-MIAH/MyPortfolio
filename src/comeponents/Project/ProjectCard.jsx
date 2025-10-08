/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
const ProjectCard = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const projects = [
    {
      id: 1,
      title: "AuraFit",
      description:
        "AuraFit is a complete fitness tracking and trainer booking platform designed to connect users with expert trainers, manage classes, book sessions, and engage in a supportive fitness community.",
      image: "https://i.ibb.co.com/7xbRrkfH/Screenshot-2025-08-11-140751.png",
      live: "https://fiteness-b11a12.web.app",
    },
    {
      id: 2,
      title: "SpeakFlow",
      description:
        "SpeakFlow is an interactive blogging platform where users can write blogs, save their favorites, filter content, and leave comments.",
      image: "https://i.ibb.co/fdCG3Ss1/Screenshot-2025-06-28-211705.png",
      live: "https://blogs-website-a11b11.web.app",
    },
    {
      id: 3,
      title: "PlantWarden",
      description:
        "Beautiful application to manage your plant collection with watering reminders, care tips, and plant health tracking.",
      image: "https://i.ibb.co/rfzS7NL1/Screenshot-2025-06-28-205708.png",
      live: "https://plantwarden-10.web.app",
    },
  ];

  const neonGreen = "#00FFA8";

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-900">
      <div className=" w-11/12 lg:max-w-7xl mx-auto">
        <div
          className="text-center mb-16 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-4xl  font-extrabold mb-4 uppercase tracking-wider text-white">
            <span
              style={{
                color: neonGreen,
                textShadow: `0 0 10px ${neonGreen}`,
              }}
            >
              What I’ve
            </span>{" "}
            Built
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{
              backgroundColor: neonGreen,
              boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              data-aos="flip-right"
              key={project.id}
              className="relative  rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
            >
              {/* Card Header with Wave Design */}
              <div className="h-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30"></div>
                <svg
                  className="absolute bottom-0 w-full"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    fill="white"
                  ></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    fill="white"
                  ></path>
                  <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    fill="white"
                  ></path>
                </svg>
              </div>

              {/* Project Image */}
              <div className="relative -mt-16 mx-auto w-28 h-28 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="px-6 pb-8 pt-2 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  {project.description.slice(0, 100)}
                  {project.description.length > 100 && "..."}
                </p>

                <div className="flex justify-center gap-3">
                  <Link
                    to={`/details/${project.id}`}
                    className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition"
                  >
                    View Details
                  </Link>
                  <a
                    target="_blank"
                    href={`${project.live}`}
                    className="px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition border border-white/20"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
