import supabase from "../../public/supabase/Supabase";

// GETTING ALL THE PROJECTS OF A WORKFLOW  BY THAT WORKFRLOW ID
export const getWorkflowProjects = async (workflowId) => {
  if (!workflowId) {
    console.log("No workflowId provided.");
    return;
  }

  console.log('Fetching projects for workflow id:', workflowId);

  let { data: workflowProjects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("workflowId", workflowId);

  if (error) {
    console.error("Error fetching workflow projects:", error);
    return
  }

  console.log("Workflow projects data:", workflowProjects);
  return { workflowProjects };
};


