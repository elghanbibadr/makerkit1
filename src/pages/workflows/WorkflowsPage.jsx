import DashboardNav from "../../componenet/Dashbaord/DashboardNav";
import { SideBar } from "../../componenet/Dashbaord/SideBar";
import DashboardIcon from "../../assets/dashboardicon.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import { useUser } from "../../hook/useUser";
import { useGetWorkflowProjects } from "../../hook/useGetWorkflowProjects";
import ProjectCard from "../../componenet/workflows/ProjectCard";
import Modal2 from "../../ui/Modal2";
import { useCreateProject } from "../../hook/useCreateProject";
import { useGetWorkflow } from "../../hook/useGetWorkflow";

const sidebarLinks = [
  { to: "/workflow", icon: DashboardIcon, text: "Workflows" },
  { to: "profile", icon: TaskIcon, text: "Profile" },
];

const WorkflowsPage = () => {
  const { user } = useUser();
  const { workflow, isLoading: isGettingWorkflowDetails } = useGetWorkflow(
    user?.data.user.id
  );

  const { workflowProjects, error: errorGettingWorkflows } =
    useGetWorkflowProjects(workflow?.workflow[0]?.id);

  const { createProject, isAddingProject } = useCreateProject();

  if (errorGettingWorkflows) {
    return <h1>Something went wrong ...</h1>;
  }

  async function addProject() {
    await createProject([{name:'badr 2',workflowId:workflow?.workflow[0].id}])
  }
  return (
    

      <div className="row-start-2 col-start-2">
        {workflowProjects?.workflowProjects.map(({ id, name }) => {
          return <ProjectCard projectId={id} key={id} projectName={name} />;
        })}
        <Modal2 onClick={addProject} />
      </div>
     

     
  );
};

export default WorkflowsPage;
