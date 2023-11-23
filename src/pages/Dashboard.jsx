import Navbar from "../componenet/Home/Navbar";
import { useState } from "react";
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Line Chart",
        data: [65, 59, 80, 81, 56],
        fill: false, // To have an unfilled line
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="text-red-500 text-6xl">
      <LineChart />
    </div>
  );
};

export default Dashboard;
