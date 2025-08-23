/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";


const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // Will trigger every time section comes into view
  });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      color: "#3b82f6",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="relative bg-[url('https://i.ibb.co/nsB7G8M1/Flux-Dev-highresolution-stock-photo-of-A-modern-Git-Hub-banner-1-1.jpg')] bg-center bg-cover bg-no-repeat md:h-[calc(100vh-100px)] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/60"></div>

      <section
        id="home"
        ref={ref}
        className="relative z-10 md:py-16 xl:py-40 py-10 w-11/12 md:max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:items-center md:items-center lg:px-8 "
      >
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl font-bold  text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse">
              MASUD MIAH
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl  font-semibold mb-6 text-white"
            variants={itemVariants}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.div
            className="text-lg md:mb-8 min-h-[80px] text-gray-300"
            variants={itemVariants}
          >
            <Typewriter
              options={{
                strings: [
                  "I build exceptional digital experiences",
                  "Modern web applications",
                  "Scalable backend solutions",
                  "Responsive user interfaces",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                cursor: "▌",
                wrapperClassName: "font-medium",
                cursorClassName: "text-blue-500 font-bold",
              }}
            />
          </motion.div>

          <motion.div
            className="flex space-x-6"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/MD-MASUD-MIAH"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-masud-miah-326186344"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/hossainmasooddhali"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaFacebook size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative">
            <img
              src={"https://i.ibb.co.com/Fb5NNhNN/1743526656136-1.jpg"}
              alt="Masud Miah"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4  border-blue-100 shadow-xl relative z-10"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
