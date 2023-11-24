import arrow from "../assets/arrow.svg";
import StatisticChartCard from "../componenet/Dashbaord/StatisticChartCard";

const Dashboard = () => {
  const StatisticData = [
    {
      id: 1,
      chartCardTitle: "Monthly Recurring Revenue",
      percentage: "20%",
      isGrowing: true,
      gaineValue: "$8.5",
      chartLineData: [3, 5, 1, 4, 2, 1, 4, 2, 10, 2],
    },
    {
      id: 2,
      chartCardTitle: "Revenue",
      percentage: "12%",
      isGrowing: true,
      gaineValue: "$5.1",
      chartLineData: [1, 1, 9, 4, 6, 3, 3, 3],
    },
    {
      id: 3,
      chartCardTitle: "Fees",
      percentage: "9%",
      isGrowing: true,
      gaineValue: "$2.8",
      chartLineData: [1, 0, 11, 20, 6, 2, 10, 2],
    },
    {
      id: 3,
      chartCardTitle: "New Customers",
      percentage: "-25%",
      isGrowing: true,
      gaineValue: "2.0",
      chartLineData: [1, 10, 13, 0, 5, 5, 0, 12],
    },
    {
      id: 4,
      chartCardTitle: "Visitor      ",
      percentage: "-4.3%",
      isGrowing: true,
      gaineValue: "5.9",
      chartLineData: [1, 3, 14, 19, 8, 2, 23, 22],
    },
    {
      id: 5,
      chartCardTitle: "Returning Visitors      ",
      percentage: "= 10%",
      isGrowing: true,
      gaineValue: "7.6",
      chartLineData: [1, 3, 14, 11, 3, 10, 3, 12],
    },
  ];
  return (
    <div className="mb-10 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {StatisticData.map((data) => (
        <StatisticChartCard
          key={data.id}
          chartCardTitle={data.chartCardTitle}
          percentage={data.percentage}
          isGrowing={data.isGrowing}
          gaineValue={data.gaineValue}
          chartLineData={data.chartLineData}
        />
      ))}
    </div>
  );
};

export default Dashboard;
