// EarningsChart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const series = [
    {
      name: "Earnings",
      data: [100, 200, 150, 250, 300, 280, 350],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false, // Hide export/download/zoom buttons
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      // title: {
      //   text: "Earnings (in K)",
      //   style: {
      //     fontSize: "14px",
      //   },
      // },
      labels: {
        formatter: (val) => `${val}k`,
      },
    },
    colors: ["#42adf5"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false, // Hides top legend label
    },
    fill: {
      type: "solid",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ["red"],
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={320}
      />
    </div>
  );
};

export default Chart;
