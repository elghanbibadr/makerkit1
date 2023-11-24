import React from "react";
import LineChart from "../../ui/LineChart";
const StatisticChartCard = ({
  chartCardTitle,
  percentage,
  isGrowing,
  gaineValue,
  chartLineData,
}) => {
  return (
    <div className=" border border-accent1 p-4 rounded-md">
      <h4 className="text-gray-400 font-medium text-md">{chartCardTitle}</h4>
      <div className="flex justify-between my-4">
        <span className="text-white text-2xl md:text-4xl font-bold">
          {gaineValue}
        </span>
        <div className="bg-[#22c55e1a] flex items-center w-fit font-semibold px-3 py-2 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className={`h-4  ${isGrowing ? "text-green-500" : "text-red-500"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            ></path>
          </svg>
          <span className="text-green-400 ml-1 text-xs  md:text-sm">
            {percentage}
          </span>
        </div>
      </div>
      <LineChart data={chartLineData} />
    </div>
  );
};

export default StatisticChartCard;
