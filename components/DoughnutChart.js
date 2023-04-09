import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Presale",
    "Private Sale",
    "Foundation & Development",
    "Marketing",
    "Founders & Partners",
    "Airdrop",
    "Liquidity",
  ],
  datasets: [
    {
      label: "Kiwinative held",
      data: [3000000000000, 300000000000, 500000000000, 300000000000, 700000000000, 500000000000, 4800000000000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
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
      space: 7,
      borderJoinStyle: "round",
      offset: 7,
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut data={data} />;
};
