import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { useParams } from "react-router";
const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/project-data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find(
          (item) => String(item.id) === String(id)
        );
        setProject(foundProject);
      })
      .catch((err) => console.error("Error fetching project data:", err));
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  console.log("single data", project);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Project Header */}

        {/* Project Content */}
        <div className="flex flex-col ">
          {/* Images Section */}
          <div className="p-6 flex">
            <div className="grid grid-1">
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img
                  src={project.image}
                  alt={"image"}
                  className="w-full  object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="bg-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-2 text-blue-100">{project.description}</p>
          </div>
          {/* Details Section */}
          <div className=" p-6 bg-gray-50">
            {/* Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="font-medium">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">
                Challenges Overcome
              </h2>
              <ul className="space-y-2 pl-5">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <FaLock className="mt-1 mr-2 text-yellow-500 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Plans */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">
                Future Plans
              </h2>
              <ul className="space-y-2 pl-5">
                {project.futurePlans.map((plan, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <FaChartLine className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                    {plan}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-8">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex-1 text-center"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 flex-1 text-center"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
