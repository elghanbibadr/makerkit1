import { useMutation,useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteTask as deleteTaskApi } from "../services/apiTasks";

export function useDeleteTask(){
    const queryClient = useQueryClient()
    const {mutate : deleteTask, isLoading: isDeleting}=useMutation({
        mutationFn:(taskId) => deleteTaskApi(taskId),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
            document.getElementById('my_modal_2').checked=false
            toast.success('Task deleted successfully ')
        },
        onError:(err) => toast.error(err.message),
        
    })

    return {deleteTask   , isDeleting}
}