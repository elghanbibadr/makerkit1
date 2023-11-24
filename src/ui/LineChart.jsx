import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ data: lineChartData }) => {
  // Sample data for the line chart
  const data = {
    labels: ["April 23", "May 23", "June 23", "August 23", "October 23"],
    datasets: [
      {
        data: lineChartData,
        label: "",
        fill: false,
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderColor: "#a78bfa",
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    plugins: {
      legend: false,
      title: {
        display: false, // Hide the title label on top of the chart
        text: "",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11, // Adjust the font size as needed
          },
        },
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
