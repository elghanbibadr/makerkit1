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
      isGrowing: false,
      gaineValue: "2.0",
      chartLineData: [1, 10, 13, 0, 5, 5, 0, 12],
    },
    {
      id: 4,
      chartCardTitle: "Visitor      ",
      percentage: "-4.3%",
      isGrowing: false,
      gaineValue: "5.9",
      chartLineData: [1, 3, 14, 19, 8, 2, 23, 22],
    },
    {
      id: 5,
      chartCardTitle: "Returning Visitors      ",
      percentage: "= 10%",
      gaineValue: "7.6",
      chartLineData: [1, 3, 14, 11, 3, 10, 3, 12],
    },
    {
      id: 6,
      chartCardTitle: "Churn      ",
      percentage: "-10%",
      isGrowing: true,
      gaineValue: "8.9%",
      chartLineData: [10, 1, 11, 5, 7, 0, 4, 6],
    },
    {
      id: 7,
      chartCardTitle: "Support Tickets      ",
      percentage: "-30%",
      isGrowing: true,
      gaineValue: "4.4",
      chartLineData: [11, 3, 3, 10, 6, 10, 9, 12],
    },
    {
      id: 8,
      chartCardTitle: "Active Users      ",
      percentage: "10%",
      isGrowing: true,
      gaineValue: "0.5",
      chartLineData: [7, 7, 14, 1, 7, 8, 4, 2],
    },
  ];
  const tableData = [
    {
      Customer: "Pippin Oddo",
      Plan: "Pro",
      MRR: "$100.2",
      Logins: 920,
      Status: "Healthy",
    },
    {
      Customer: "Väinö Pánfilo",
      Plan: "Basic",
      MRR: "$40.6",
      Logins: 300,
      Status: "Possible Churn",
    },
    {
      Customer: "Giorgos Quinten",
      Plan: "Pro",
      MRR: "$2004.3",
      Logins: 1000,
      Status: "Healthy",
    },
    {
      Customer: "Adhelm Otis",
      Plan: "Basic",
      MRR: "$0",
      Logins: 10,
      Status: "Churned",
    },
  ];
  return (
    <>
      <div className="mb-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
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
      <div className="border border-accent1 p-3 rounded-md">
        <h4 className="text-gray-400 text-xl font-normal">Customers</h4>
        <table className="w-full mt-6 mx-3 ">
          <thead className=" text-gray-400  text-left border-b border-accent1 ">
            <th>Customer</th>
            <th>Plan</th>
            <th>MRR</th>
            <th>Logins</th>
            <th className="hidden md:block"> Status</th>
          </thead>
          <tbody className="text-white">
            {tableData.map(({ Customer, Plan, MRR, Logins, Status }, index) => {
              return (
                <tr key={index} className="text-left border-b border-accent1 ">
                  <td>{Customer}</td>
                  <td>{Plan}</td>
                  <td>{MRR} </td>
                  <td>{Logins} </td>
                  <td>
                    <div
                      className={`${
                        Status === "Healthy"
                          ? "bg-[#22c55e1a] text-green-500"
                          : Status === "Possible Churn"
                          ? "bg-[#eab3081a] text-yellow-500"
                          : "bg-[#ef44441a] text-red-500"
                      }  hidden md:block  w-fit font-semibold px-3 py-1 rounded-md p-1`}
                    >
                      <span className={`   ml-1 text-xs  md:text-sm`}>
                        {Status}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
