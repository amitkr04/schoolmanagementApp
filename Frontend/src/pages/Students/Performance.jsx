// PerformanceSection.js
import React, { useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const PerformanceSection = () => {
  const chartRef = useRef(null);

  // Sample performance data
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: performanceData.marks,
      },
    ],
  };

  useEffect(() => {
    const currentChart = chartRef.current;

    // Cleanup function to destroy chart instance
    return () => {
      if (currentChart) {
        currentChart.destroy();
      }
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Performance</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <div className="mb-4">
            <Line
              ref={chartRef} // Set ref for the chart
              data={lineChartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
          <p className="text-lg font-semibold text-center">
            Total Marks: {performanceData.totalMarks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
