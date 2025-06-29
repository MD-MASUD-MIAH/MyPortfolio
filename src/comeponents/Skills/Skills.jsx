/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import ad from "../../../public/Animation - 1751095696009.json";
import css from "../../../public/css.json";
import firebase from "../../../public/firebase.json";
import github from "../../../public/github.json";
import js from "../../../public/js.json";
import mongodb from "../../../public/mongodb.json";
import node from "../../../public/node.json";
import react from "../../../public/react.json";

const Skills = () => {
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

  const skills = [
    {
      icon: <Lottie animationData={ad} loop={true} className="h-20 w-20" />,
      name: "HTML",
      color: "text-orange-500",
    },
    {
      icon: <Lottie animationData={css} loop={true} className="h-20 w-20" />,
      name: "CSS",
      color: "text-blue-500",
    },
    {
      icon: <Lottie animationData={js} loop={true} className="h-20 w-20" />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      icon: <Lottie animationData={react} loop={true} className="h-20 w-20" />,
      name: "React",
      color: "text-blue-400",
    },
    {
      icon: <SiTailwindcss size={40} className="text-cyan-400" />,
      name: "Tailwind",
      color: "text-cyan-400",
    },
    {
      icon: <Lottie animationData={node} loop={true} className="h-20 w-20" />,
      name: "Node.js",
      color: "text-green-500",
    },
    {
      icon: <SiExpress size={40} className="text-gray-400" />,
      name: "Express",
      color: "text-gray-400",
    },
    {
      icon: (
        <Lottie animationData={mongodb} loop={true} className="h-20 w-20" />
      ),
      name: "MongoDB",
      color: "text-green-600",
    },
    {
      icon: (
        <Lottie animationData={firebase} loop={true} className="h-20 w-20" />
      ),
      name: "Firebase",
      color: "text-yellow-500",
    },
    {
      icon: <Lottie animationData={github} loop={true} className="h-20 w-20" />,
      name: "GitHub",
      color: "text-gray-700 dark:text-gray-300",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
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

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
           Technologies {" "}
            <span className="text-indigo-600 dark:text-indigo-400">I Use</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div
                className={`${skill.color} h-24 w-24 flex items-center justify-center mb-3`}
              >
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
