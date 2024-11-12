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
  { to: "/dashboard", icon: DashboardIcon, text: "Workflows" },
  { to: "/dashboard/tasks", icon: TaskIcon, text: "settings" },
];

const WorkflowsPage = () => {
  const { user } = useUser();
  const { workflow, isLoading: isGettingWorkflowDetails } = useGetWorkflow(
    user?.data.user.id
  );

  console.log("workflow",workflow)
  const { workflowProjects, error: errorGettingWorkflows } =
    useGetWorkflowProjects(workflow?.workflow[0]?.id);

  const { createProject, isAddingProject } = useCreateProject();

  if (errorGettingWorkflows) {
    return <h1>Something went wrong ...</h1>;
  }

  function addProject() {
    // await createProject([{name:'badr 2',workflowId:workflow.workflow.id}])
  }
  return (
    <div className="lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[220px_1fr] lg:gap-x-6  ">
      <DashboardNav />

      <div className="row-start-2 col-start-2">
        {workflowProjects?.workflowProjects.map(({ id, name }) => {
          return <ProjectCard projectId={id} key={id} projectName={name} />;
        })}
        <Modal2 onClick={addProject} />
      </div>
      <div></div>

      <SideBar links={sidebarLinks} />
    </div>
  );
};

export default WorkflowsPage;
