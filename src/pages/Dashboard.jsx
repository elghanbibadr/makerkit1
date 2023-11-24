import React from "react";
import arrow from "../assets/arrow.svg";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ["April 23", "May 23", "June 23", "August 23", "October 23"],
    datasets: [
      {
        data: [3, 5, 1, 4, 2, 1, 4, 2],
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

const Dashboard = () => {
  return (
    <div className="w-[400px] border border-accent1 p-4 rounded-md">
      <h4 className="text-gray-400 font-medium text-md">
        Monthly Recurring Revenue
      </h4>
      <div className="flex justify-between my-4">
        <span className="text-white text-2xl md:text-4xl font-bold">$8.5</span>
        <div className="bg-[#22c55e1a] flex items-center w-fit font-semibold px-3 py-2 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="h-4 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            ></path>
          </svg>
          <span className="text-green-400 ml-1 text-sm">20%</span>
        </div>
      </div>
      <LineChart />
    </div>
  );
};

export default Dashboard;
