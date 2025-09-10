import type { Record } from "./BarChart";

export function aggregateByDate(records: Record[]) {
  const dateMap = new Map<
    string,
    { total: number; categories: string[]; originalDate: string }
  >();

  records.forEach((record) => {
    const d = new Date(record.date);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getUTCDate()).padStart(2, "0")}`;

    const existing = dateMap.get(key);
    if (existing) {
      existing.total += record.amount;
      if (!existing.categories.includes(record.category)) {
        existing.categories.push(record.category);
      }
    } else {
      dateMap.set(key, {
        total: record.amount,
        categories: [record.category],
        originalDate: record.date,
      });
    }
  });

  return Array.from(dateMap.entries())
    .map(([date, data]) => ({
      date,
      amount: data.total,
      categories: data.categories,
      originalDate: data.originalDate,
    }))
    .sort(
      (a, b) =>
        new Date(a.originalDate).getTime() - new Date(b.originalDate).getTime()
    );
}

/**
 * Dynamic bar colors based on amount.
 */
export function getAmountColor(amount: number, isDark = false) {
  if (amount > 200)
    return {
      bg: isDark ? "rgba(255, 99, 132, 0.3)" : "rgba(255, 99, 132, 0.2)",
      border: isDark ? "rgba(255, 99, 132, 0.8)" : "rgba(255, 99, 132, 1)",
    };
  if (amount > 100)
    return {
      bg: isDark ? "rgba(255, 206, 86, 0.3)" : "rgba(255, 206, 86, 0.2)",
      border: isDark ? "rgba(255, 206, 86, 0.8)" : "rgba(255, 206, 86, 1)",
    };
  if (amount > 50)
    return {
      bg: isDark ? "rgba(54, 162, 235, 0.3)" : "rgba(54, 162, 235, 0.2)",
      border: isDark ? "rgba(54, 162, 235, 0.8)" : "rgba(54, 162, 235, 1)",
    };
  return {
    bg: isDark ? "rgba(75, 192, 192, 0.3)" : "rgba(75, 192, 192, 0.2)",
    border: isDark ? "rgba(75, 192, 192, 0.8)" : "rgba(75, 192, 192, 1)",
  };
}

/**
 * Prepare chart.js `data` object.
 */
export function createChartData(
  aggregatedData: {
    date: string;
    amount: number;
    categories: string[];
  }[],
  isDark: boolean,
  colorFn: (amount: number, isDark: boolean) => { bg: string; border: string }
) {
  return {
    labels: aggregatedData.map((item) => {
      const [, month, day] = item.date.split("-");
      return `${month}/${day}`;
    }),
    datasets: [
      {
        data: aggregatedData.map((item) => item.amount),
        backgroundColor: aggregatedData.map(
          (item) => colorFn(item.amount, isDark).bg
        ),
        borderColor: aggregatedData.map(
          (item) => colorFn(item.amount, isDark).border
        ),
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  };
}

/**
 * Chart.js `options` with theming & responsive tweaks.
 */
export function createChartOptions(
  aggregatedData: {
    date: string;
    amount: number;
    categories: string[];
  }[],
  isDark: boolean,
  isMobile: boolean
) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: isDark
          ? "rgba(31, 41, 55, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
        titleColor: isDark ? "#f9fafb" : "#1f2937",
        bodyColor: isDark ? "#d1d5db" : "#374151",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context: { dataIndex: number }) {
            const item = aggregatedData[context.dataIndex];
            const categoriesText =
              item.categories.length > 1
                ? `Categories: ${item.categories.join(", ")}`
                : `Category: ${item.categories[0]}`;
            return [`Total: $${item.amount.toFixed(2)}`, categoriesText];
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: isMobile ? 12 : 14,
            weight: "bold" as const,
          },
          color: isDark ? "#d1d5db" : "#2c3e50",
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: isDark ? "#9ca3af" : "#7f8c8d",
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0,
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: "Amount ($)",
          font: {
            size: isMobile ? 12 : 16,
            weight: "bold" as const,
          },
          color: isDark ? "#d1d5db" : "#2c3e50",
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: isDark ? "#9ca3af" : "#7f8c8d",
          callback: (value: string | number) => `$${value}`,
        },
        grid: { color: isDark ? "#374151" : "#e0e0e0" },
        beginAtZero: true,
      },
    },
  };
}
