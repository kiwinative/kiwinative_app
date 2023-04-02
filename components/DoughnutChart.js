import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Public Sale",
    "Private Sale",
    "Staking Reward",
    "Burned",
    "Partnership Funds",
    "Team Pool",
  ],
  datasets: [
    {
      label: "Kiwinative held",
      data: [10000000, 1000000, 3000000, 5000000, 2000000, 3000000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
      space: 10,
      borderJoinStyle: "miter",
      offset: 10,
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut data={data} className="text-darkWhite" />;
};
