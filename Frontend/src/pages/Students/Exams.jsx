import React, { useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85], // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1,
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.results,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
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
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Exam Results</h1>
        <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-md">
          {examResultsData.subjects.map((subject, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span className="font-semibold">{subject}</span>
              <span>Score: {examResultsData.results[index]}%</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Results Chart</h2>
          <div className="h-64">
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
