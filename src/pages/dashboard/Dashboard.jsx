import React, { useMemo } from "react";
import UsersTable from "../../componenet/Dashbaord/UsersTable";
import { useTask } from "../../hook/usetasks";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
} from "chart.js";
import { useGetProjectMembers } from "../../hook/useGetMembre";
import PieChart from "./componenet/PieChart";
import TasksCompletionsBarChart from "./componenet/TasksCompletionsBarChart";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.register(BarElement, Tooltip, Legend);
  ChartJS.register(
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    Title
  );
  // GETTING THE TASKS
  const { tasks, isLoading, error } = useTask(1);
  const { projectMembers, error: errorGettingProjectMembers } =
    useGetProjectMembers(1);

  // Count tasks by status using useMemo for performance optimization
  const taskStatusCounts = useMemo(() => {
    if (!tasks) return { completed: 0, inProgress: 0, pending: 0 };

    return tasks.reduce(
      (counts, task) => {
        console.log("task", task);
        switch (task.status) {
          case "Completed":
            counts.completed += 1;
            break;
          case "In Progress":
            counts.inProgress += 1;
            break;
          case "Pending":
            counts.pending += 1;
            break;
          default:
            break;
        }
        return counts;
      },
      { completed: 0, inProgress: 0, pending: 0 }
    );
  }, [tasks]);

  // Prepare data for the Pie chart
  const PieChartData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Tasks by Status",
        data: [
          taskStatusCounts.completed,
          taskStatusCounts.inProgress,
          taskStatusCounts.pending,
        ],
        backgroundColor: ["#a78bfa", "#6b7280e0", "#6d28d9", "#030712"],
        hoverBackgroundColor: ["#36A2EB80", "#FF638480", "#FFCE5680"],
        borderWidth: 0,
      },
    ],
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;
  const tasksCompletedCountBarChartData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Team tasks analytics",
        data: [
          taskStatusCounts.completed,
          taskStatusCounts.inProgress,
          taskStatusCounts.pending,
        ],

        // data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["#a78bfa", "#6b7280e0", "#6d28d9", "#030712"],

        borderRadius: 20,
      },
    ],
  };
  const barChartData = {
    labels: projectMembers
      ? projectMembers.projectMembers.map((member) => member.name)
      : [],
    datasets: [
      {
        label: "Tasks Completed by Each Member",
        data: projectMembers
          ? projectMembers.projectMembers.map((member) => member.tasksCompleted)
          : [],
        backgroundColor: "#a78bfa",
        borderRadius: 20,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className=" flex flex-col lg:flex-row lg:w-[400px]  items-center justify-between  gap-10">
        <PieChart PieChartData={PieChartData} />
        <Bar
      data={tasksCompletedCountBarChartData}
      options={{
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: {
            labels: {
              borderRadius: 20,
              fontSize: 1,
            },
          },
        },

        scales: {
          x: [
            {
              beginAtZero: true,

              ticks: {
                stepSize: 1,
                callback: (value) => (Number.isInteger(value) ? value : null), // Ensure integers on x-axis
              },
            },
          ],
        },
      }}
    />
        {/* <TasksCompletedCountBarChart data={tasksCompletedCountBarChartData} /> */}
        <TasksCompletionsBarChart tasksCompletionChartData={barChartData} />
      </div>
      <UsersTable />
    </React.Fragment>
  );
};

export default Dashboard;
