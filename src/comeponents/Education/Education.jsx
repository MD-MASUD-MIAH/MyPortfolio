/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // Will trigger every time section comes into view
  });

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Arts.",
      institution: "National University | Bangladesh",
      year: "2021 - 2024",
     
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Government Barhamganj Collage",
      year: " 2019-2021",
   
    },
    {
      id: 3,
      degree: "Secondary School Certificate.",
      institution: " Shahid Hossain  High School",
      year: "2014-2019",
     
    },
  ];

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
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className=" w-11/12 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Academic {" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Qualifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              } items-center justify-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-indigo-500 rounded-full transform -translate-x-1/2 z-10"></div>

              {/* Content card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {edu.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
