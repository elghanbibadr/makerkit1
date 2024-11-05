import React, { useMemo } from "react";
import UsersTable from "../../componenet/Dashbaord/UsersTable";
import { useTask } from "../../hook/usetasks";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement } from 'chart.js';
import { useGetProjectMembers } from "../../hook/useGetMembre";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.register(BarElement, Tooltip, Legend);
  ChartJS.register(LineElement,CategoryScale, PointElement, LinearScale, Title);
  // GETTING THE TASKS
  const { tasks, isLoading, error } = useTask(1);
  const {projectMembers,error:errorGettingProjectMembers}=useGetProjectMembers(1)
   console.log('error getting project members',errorGettingProjectMembers)
  console.log('project members',projectMembers)

  // Count tasks by status using useMemo for performance optimization
  const taskStatusCounts = useMemo(() => {
    if (!tasks) return { completed: 0, inProgress: 0, pending: 0 };
    
    return tasks.reduce((counts, task) => {
      console.log('task',task)
      switch (task.status) {
        case 'Completed':
          counts.completed += 1;
          break;
        case 'In Progress':
          counts.inProgress += 1;
          break;
        case 'Pending':
          counts.pending += 1;
          break;
        default:
          break;
      }
      return counts;
    }, { completed: 0, inProgress: 0, pending: 0 });
  }, [tasks]);

  // Prepare data for the Pie chart
  const data = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        label: 'Tasks by Status',
        data: [taskStatusCounts.completed, taskStatusCounts.inProgress, taskStatusCounts.pending],
        backgroundColor: [
          "#a78bfa",
           "#6b7280e0",
          "#6d28d9",
           "#030712",
  
        ],      
          hoverBackgroundColor: ['#36A2EB80', '#FF638480', '#FFCE5680'],
          borderWidth:0,
      }
    ]
  };
  // const taskCompletionData = useMemo(() => {
  //   if (!tasks) return { labels: [], data: [] };

  //   // Group tasks by completion date (assuming 'completedAt' field exists)
  //   const completedTasksByDate = tasks.reduce((acc, task) => {
  //     if (task.status === "Completed" && task.completedAt) { // Only include tasks with a completion date
  //       const date = new Date(task.completedAt).toLocaleDateString();
  //       acc[date] = (acc[date] || 0) + 1;
  //     }
  //     return acc;
  //   }, {});

  //   // Sort dates and prepare data for the line chart
  //   const sortedDates = Object.keys(completedTasksByDate).sort((a, b) => new Date(a) - new Date(b));
  //   const taskCounts = sortedDates.map(date => completedTasksByDate[date]);

  //   return {
  //     labels: sortedDates,
  //     data1: taskCounts
  //   };
  // }, [tasks]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;
  const data1 = {
    labels: ["Completed","In Progress","Pending"],
    datasets: [{
      label: 'Team tasks analytics',
      data: [taskStatusCounts.completed, taskStatusCounts.inProgress, taskStatusCounts.pending],

      // data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "#a78bfa",
         "#6b7280e0",
        "#6d28d9",
         "#030712",

      ],
     
      borderRadius: 20,
      
    }]
  };

  console.log("data 1",data1)
  return (
    <React.Fragment>
      <div className=" flex items-center justify-between w-[500px] md:gap-20">
        <Pie style={{height:"200px"}} data={data} />
        <Bar data={data1} options={{indexAxis:"y",scales: {
      yAxes: [{
         ticks: {
            stepSize: 1
         }
      }]
   }}}  />
      </div>
      <UsersTable />
    </React.Fragment>
  );
};

export default Dashboard;
