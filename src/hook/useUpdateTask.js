import { useMutation, useQueryClient } from "react-query";
import { updateTask as updateTaskApi } from "../services/apiTasks";
import toast from "react-hot-toast";

export function useUpdateTask() {
    const queryClient = useQueryClient()

    const { mutate: updateTask, isLoading:isUpdatingTask } = useMutation({
        mutationFn: ({ taskId, updatedTask }) => updateTaskApi(taskId, updatedTask),
        onSuccess: () => {
            toast.success("Task successfully updated");
            queryClient.invalidateQueries("tasks");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    })


    return { updateTask, isUpdatingTask }
}