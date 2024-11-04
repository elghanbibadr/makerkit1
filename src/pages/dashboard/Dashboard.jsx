import React, { useMemo } from "react";
import UsersTable from "../../componenet/Dashbaord/UsersTable";
import { useTask } from "../../hook/usetasks";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // GETTING THE TASKS
  const { tasks, isLoading, error } = useTask(1);

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
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB80', '#FF638480', '#FFCE5680']
      }
    ]
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <React.Fragment>
      <div className="mb-10 md:grid md:grid-cols-2 flex lg:grid-cols-3 md:gap-4">
        <Pie data={data} />
      </div>
      <UsersTable />
    </React.Fragment>
  );
};

export default Dashboard;
