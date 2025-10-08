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

  const neonGreen = "#00FFA8";

  return (
    <section id="education" ref={ref} className="py-20 px-4 bg-gray-900">
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
              Academic
            </span>{" "}
            Qualifications
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{
              backgroundColor: neonGreen,
              boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
            }}
          ></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row   ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              } items-center justify-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-white rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-[#00FFA8]"></div>

              {/* Content card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[#00FFA8] font-medium mb-1">
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
