import React from "react";
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
const UsersTable = () => {
  return (
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
  );
};

export default UsersTable;
