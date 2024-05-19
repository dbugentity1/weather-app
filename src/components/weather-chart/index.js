import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { convertTo12HourFormat } from "../../utils/helper";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const extractChartData = (data) => {
  if (!data) {
    return undefined;
  }
  // Filter data for time between 11:00:00 and 20:00:00
  const filteredData = data.filter((item) => {
    const time = item.datetime.split(":");
    const hour = parseInt(time[0], 10);
    return hour >= 11 && hour <= 20;
  });

  const labels = filteredData.map((item) =>
    convertTo12HourFormat(item.datetime)
  );
  const feelslike = filteredData.map((item) => parseInt(item.feelslike));
  const humidity = filteredData.map((item) => parseInt(item.humidity));
  const temp = filteredData.map((item) => parseInt(item.temp));

  return {
    labels,
    datasets: [
      {
        id: "3",
        label: "Temparature",
        data: temp,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        id: "1",
        label: "Feels Like",
        data: feelslike,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
      },
      {
        id: "2",
        label: "Humidity",
        data: humidity,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
      },
    ],
  };
};

const WeatherChart = ({ weatherInfo }) => {
  const chartData = extractChartData(weatherInfo?.days?.[0]?.hours);

  if (!chartData) {
    return null;
  }

  return (
    <div>
      <Line
        height="100%"
        width="100%"
        datasetIdKey="id"
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 4,
                boxHeight: 4,
                pointStyle: "circle",
              },
            },
            title: {
              display: true,
              text: "Weather Data (11 AM to 8 PM)",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
              },
            },
            y: {
              title: {
                display: true,
                text: "Values",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default WeatherChart;
