import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ projectName, projectId }) => {
  // Construct the link URL with projectId
  const to = `/dashboard?projectId=${projectId}`;

  return (
    <Link to={to}>
      <div className="border-[0.4px] max-w-xs p-4 border-gray-50">
        <h4 className="text-accent1 text-sm">{projectName}</h4>
      </div>
    </Link>
  );
};

export default ProjectCard;
