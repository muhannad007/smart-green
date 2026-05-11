import React, { useState } from "react";
import Chart from "react-apexcharts";

const RadialBar = ({ level }) => {
  const [options] = useState({
    chart: { type: "radialBar", offsetY: -20 },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#e7e7e7", strokeWidth: "97%" },
        dataLabels: {
          name: { show: false },
          value: { offsetY: -2, fontSize: "22px" },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: { shade: "light", opacityFrom: 1, opacityTo: 1 },
    },
    labels: ["Average Results"],
  });
  const [series] = useState([level]);

  return (
    <Chart options={options} series={series} type="radialBar" height={350} />
  );
};

export default RadialBar;
