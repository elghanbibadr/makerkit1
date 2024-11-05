import { Bar } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const TasksCompletedCountBarChart = ({ tasksCompletedCountBarChartData }) => {
  return (
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
  );
};

export default TasksCompletedCountBarChart;
