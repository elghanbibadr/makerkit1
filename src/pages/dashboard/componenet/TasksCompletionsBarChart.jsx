import { Bar } from 'react-chartjs-2'

// eslint-disable-next-line react/prop-types
const TasksCompletionsBarChart = ({tasksCompletionChartData}) => {
  return (
    <Bar
    data={tasksCompletionChartData}
    options={{
      indexAxis: "x",
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            callback: (value) => (Number.isInteger(value) ? value : null), // Ensure integers on x-axis
          },
        },
      },
    }}
  />
     )
}

export default TasksCompletionsBarChart