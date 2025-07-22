import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const generateMockData = (range) => {
  const labels = [];
  const sales = [];
  const orders = [];

  const isDate = /^\d{4}-\d{2}-\d{2}$/.test(range);
  let count = 30;

  if (isDate) {
    labels.push(range);
    sales.push(Math.floor(Math.random() * 7000 + 1000));
    orders.push(Math.floor(Math.random() * 300 + 50));
  } else {
    count =
      range === "Last 9 Days" ? 9 :
      range === "Last Month" ? 30 :
      range === "3 Months" ? 90 :
      range === "6 Months" ? 180 :
      range === "12 Months" || range === "Last Year" ? 365 : 30;

    for (let i = 1; i <= count; i++) {
      labels.push(`Day ${i}`);
      sales.push(Math.floor(Math.random() * 7000 + 1000));
      orders.push(Math.floor(Math.random() * 300 + 50));
    }
  }

  return { labels, sales, orders };
};

const RealTimeChart = ({ range }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (!range) return; // Don't render anything if range is empty

    const { labels, sales, orders } = generateMockData(range);

    setChartData({
      labels,
      datasets: [
        {
          label: "Sales ($)",
          data: sales,
          fill: false,
          borderColor: "#4caf50",
          backgroundColor: "#4caf50",
          tension: 0.4,
        },
        {
          label: "Orders",
          data: orders,
          fill: false,
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          tension: 0.4,
        },
      ],
    });
  }, [range]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RealTimeChart;
