import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  Tooltip,
  Legend,
  Filler,
  Title,
);

ChartJS.defaults.font.family = "'IBM Plex Mono', monospace";

export function StagesChart() {
  return (
    <Bar
      data={{
        labels: ["200 مشاهد", "1K مشاهد", "10K مشاهد", "100K+ مشاهد"],
        datasets: [
          {
            label: "المجموعة الاختبارية",
            data: [200, 1000, 10000, 100000],
            backgroundColor: [
              "rgba(143,173,201,.4)",
              "rgba(105,211,255,.55)",
              "rgba(105,211,255,.8)",
              "rgba(63,209,146,.95)",
            ],
            borderColor: ["#8fadc9", "#69d3ff", "#69d3ff", "#3fd192"],
            borderWidth: 1.5,
            borderRadius: 4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { backgroundColor: "#08213d", titleColor: "#fff", bodyColor: "#9db4cc" },
        },
        scales: {
          y: {
            type: "logarithmic",
            grid: { color: "rgba(148,205,255,.08)" },
            ticks: { color: "#8fadc9", callback: (v) => Number(v).toLocaleString() },
          },
          x: { grid: { display: false }, ticks: { color: "#e9f2fb" } },
        },
      }}
    />
  );
}

export function RetentionChart() {
  const ref = useRef<ChartJS<"line">>(null);
  // gradients need canvas; use scriptable colors
  useEffect(() => {
    if (!ref.current) return;
    const chart = ref.current;
    const ctx = chart.ctx;
    const gradGood = ctx.createLinearGradient(0, 0, 0, 260);
    gradGood.addColorStop(0, "rgba(63,209,146,.45)");
    gradGood.addColorStop(1, "rgba(63,209,146,0)");
    const gradBad = ctx.createLinearGradient(0, 0, 0, 260);
    gradBad.addColorStop(0, "rgba(255,106,69,.4)");
    gradBad.addColorStop(1, "rgba(255,106,69,0)");
    chart.data.datasets[0].backgroundColor = gradGood;
    chart.data.datasets[1].backgroundColor = gradBad;
    chart.update();
  }, []);

  return (
    <Line
      ref={ref}
      data={{
        labels: ["0s (الخطاف)", "3s (صدمة)", "10s (فضول)", "20s (تطبيق)", "30s (CTA)"],
        datasets: [
          {
            label: "فيديو فيروسي (منهجية نبيل)",
            data: [100, 85, 78, 72, 65],
            borderColor: "#3fd192",
            backgroundColor: "rgba(63,209,146,.25)",
            borderWidth: 3,
            pointBackgroundColor: "#3fd192",
            fill: true,
            tension: 0.4,
          },
          {
            label: "فيديو فاشل (مقدمة مملة)",
            data: [100, 20, 10, 5, 2],
            borderColor: "#ff6a45",
            backgroundColor: "rgba(255,106,69,.2)",
            borderWidth: 2,
            borderDash: [5, 5],
            pointBackgroundColor: "#ff6a45",
            fill: true,
            tension: 0.4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#e9f2fb", font: { size: 11 } } },
          tooltip: { backgroundColor: "#08213d", titleColor: "#fff", bodyColor: "#9db4cc" },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: "rgba(148,205,255,.08)" },
            ticks: { color: "#8fadc9", callback: (v) => v + "%" },
          },
          x: { grid: { display: false }, ticks: { color: "#8fadc9" } },
        },
        interaction: { mode: "index", intersect: false },
      }}
    />
  );
}
