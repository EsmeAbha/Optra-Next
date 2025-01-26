"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {

      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",


  },
  fill: {
    opacity: 1,
  },
};

interface ChartFourState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartFour: React.FC = ({ 

}) => {

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Portfolio Values
        </h4>
        <div className="relative z-20 inline-block">
          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            {/* Icon or action here */}
            <i className="text-gray-400">•••</i>
          </span>
        </div>
      </div>
      <br />
      {/* Portfolio Value Section */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          $17,800.00
        </h1>
        <p className="mt-2 text-green-500 text-lg font-semibold">↑ 5.12%</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Your profits are $4,509.00 this month, that’s the best result in the last three months
        </p>
      </div>

      {/* Performance Buttons */}
      <div className="flex justify-between items-center gap-4">
        <button className="w-1/2 py-2.5 text-center text-sm font-semibold text-black bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-white">
          Worst Performance
        </button>
        <button className="w-1/2 py-2.5 text-center text-sm font-semibold text-white bg-purple-500 rounded-lg">
          Top Performance
        </button>
      </div>

      {/* Additional Tip Section */}
      <div className="mt-6 bg-purple-100 p-4 rounded-lg dark:bg-purple-800">
        <p className="text-sm text-purple-700 dark:text-purple-300">
          🌟 Here’s to improve your portfolio and understanding how investing works
        </p>
      </div>
    </div>
  );
};

export default ChartFour;
