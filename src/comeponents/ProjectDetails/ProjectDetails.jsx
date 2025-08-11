import { useEffect, useState } from "react";
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
    <div>
      {project.title}

      
    </div>
  );
};

export default ProjectDetails;
