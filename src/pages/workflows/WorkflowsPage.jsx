import DashboardNav from "../../componenet/Dashbaord/DashboardNav"
import { SideBar } from "../../componenet/Dashbaord/SideBar"
import DashboardIcon from "../../assets/dashboardicon.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import { useUser } from "../../hook/useUser";
import { useGetOrganization } from "../../hook/useGetOrganization";
import { useGetWorkflowProjects } from "../../hook/useGetWorkflowProjects";
import ProjectCard from "../../componenet/workflows/ProjectCard";

const sidebarLinks = [
    { to: "/dashboard", icon: DashboardIcon, text: "Workflows" },
    { to: "/dashboard/tasks", icon: TaskIcon, text: "settings" },
   
  ];

const WorkflowsPage = () => {
    const { user } = useUser();
    const {workflow,isLoading:isGettingWorkflowDetails}=useGetOrganization(user?.data.user.id)
    const {workflowProjects,error:errorGettingWorkflows}=useGetWorkflowProjects(workflow?.workflow[0]?.id)

  
    // console.log('my user',user)
    // console.log('my workflow',workflow)
    console.log('my workflow Prjects',workflowProjects)


    if(errorGettingWorkflows){
        return <h1>Something went wrong ...</h1>
    }

  return (
    <div className="lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[220px_1fr] lg:gap-x-6  ">
    <DashboardNav />

    <div  className="row-start-2 col-start-2">
     {workflowProjects?.workflowProjects.map(({id,name}) =>{
        return <ProjectCard projectId={id} key={id} projectName={name} />
     })}
    </div>
    <SideBar links={sidebarLinks} />
    </div>
  )
}


export default WorkflowsPage