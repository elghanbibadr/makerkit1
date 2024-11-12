import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addProject as addProjectApi } from "../services/apiProjects";

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { mutate: createProject, isLoading: isAddingProject } = useMutation({
    mutationFn: (projectInfo) => addProjectApi(projectInfo),
    onSuccess: () => {
      toast.success("project successfully created");
      //   document.getElementById('my_modal_7').checked=false

      queryClient.invalidateQueries("projects");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createProject, isAddingProject };
}
