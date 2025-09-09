"use client";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  aggregateByDate,
  getAmountColor,
  createChartData,
  createChartOptions,
} from "./chartUtils";

// Register Chart.js components (only once globally)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface Record {
  date: string; // ISO string
  amount: number; // Expense amount
  category: string; // Category
}

const BarChart = ({ records }: { records: Record[] }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Track window size for responsive charts
  const [windowWidth, setWindowWidth] = useState(1024);
  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = windowWidth < 640;
  const aggregatedData = aggregateByDate(records);

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80">
      <Bar
        data={createChartData(aggregatedData, isDark, getAmountColor)}
        options={createChartOptions(aggregatedData, isDark, isMobile)}
      />
    </div>
  );
};

export default BarChart;
