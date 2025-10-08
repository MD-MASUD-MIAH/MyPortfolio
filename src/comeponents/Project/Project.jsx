/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            What I’ve{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Built
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12"
        >
          {/* Project 1 */}
          <Slide>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-2">
                  <img
                    src="https://i.ibb.co/rfzS7NL1/Screenshot-2025-06-28-205708.png"
                    alt="Plant Care Tracker"
                    className="w-100 border "
                  />
                  <img
                    src="https://i.ibb.co/4g3K3p3M/Screenshot-2025-06-28-211351.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/Kz684Lg6/Screenshot-2025-06-28-210334.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/r2DK4VJp/Screenshot-2025-06-28-205547.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Plant Care Tracker
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Beautiful application to manage your plant collection with
                      watering reminders, care tips, and plant health tracking.
                    </p>

                    {/* Feature icons with tooltips */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">🌱</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Plant Add
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">💧</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Watering Tracker
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-500">📱</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Responsive Design
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">💬</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive UI
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Express
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Mongodb
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="https://github.com/MD-MASUD-MIAH/plantwarden-a10-client?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href="https://plantwarden-10.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2  tom-btn rounded-lg"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Slide>

          {/* Project 2 */}
          <Slide direction="right">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row-reverse">
                <div className="grid grid-cols-2">
                  <img
                    src="https://i.ibb.co/fdCG3Ss1/Screenshot-2025-06-28-211705.png"
                    className="w-100 border "
                  />
                  <img
                    src="https://i.ibb.co/hx9VWn0s/Screenshot-2025-06-28-212231.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/JR0W7fnL/Screenshot-2025-06-28-212321.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/Fb3ckJZB/Screenshot-2025-06-28-212147.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col  justify-between ">
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Blog. Connect. Discover
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 py-6">
                      SpeakFlow aims to create an engaging platform for bloggers
                      and readers. It encourages open conversations, creativity,
                      and content discovery
                    </p>

                    {/* Feature icons with tooltips */}
                    <div className="grid grid-cols-2 gap-2 mb-4  justify-end">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-green-500">✏️ </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Easily edit
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-blue-500">❤️ </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Add blogs wishlist
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-purple-500"> 🔍 </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Filter and sort
                        </span>
                      </div>
                      <div className="flex items-center  justify-end gap-2">
                        <span className="text-yellow-500">💬</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Comment on any blog
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6 justify-end">
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Express
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Mongodb
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Firebase
                      </span>
                    </div>

                    <div className="flex gap-4 justify-end">
                      <a
                        href="https://github.com/MD-MASUD-MIAH/b11a11-client-side-MD-MASUD-MIAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href="https://blogs-website-a11b11.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2  tom-btn rounded-lg"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Slide>

          {/* Project 3 */}
          <Slide>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-2">
                  <img
                    src="https://i.ibb.co/j9G5xrG4/Screenshot-2025-06-28-220038.png"
                    alt="Plant Care Tracker"
                    className="w-100 border "
                  />
                  <img
                    src="https://i.ibb.co/8LM6jk3m/Screenshot-2025-06-28-215854.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/ksfJH5p0/Screenshot-2025-06-28-215827.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                  <img
                    src="https://i.ibb.co/nMw6BsKc/Screenshot-2025-06-28-220005.png"
                    alt="Plant Care Tracker"
                    className="w-100"
                  />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Where Entertainment Meets Simplicity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Event Explorer is a modern entertainment-focused website
                      where users can discover events and reserve seats with
                      ease. Built with a sleek UI and smooth user experience in
                      mind,
                    </p>

                    {/* Feature icons with tooltips */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500"> 🎟 </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Reserve seats
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">⚡ </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Fast and interactive
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-500">🎨 </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Beautiful, responsive UI
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500"> 🖼</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Smooth sliders
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        Tailwindcss
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-indigo-400  text-white text-xs rounded-full">
                        React
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="https://github.com/MD-MASUD-MIAH/b11a9-react-authentication-MD-MASUD-MIAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href="https://event-explorer-auth.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2  tom-btn rounded-lg"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Slide>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
