import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Concluidos", "Desenvolvendo", "Não iniciados"],
  ["Abril", 10, 40, 20],
  ["Maio", 11, 46, 25],
  ["Junho", 66, 11, 30],
  ["Julho", 10, 54, 35],
];

export const options = {
  chartArea: { width: "90%", height:"70%" },
  colors: ["#280948", "#667EEA", "#764BA2"],
  legend: { position: "top" },
};

export function GraficoP() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="410px"
      data={data}
      options={options}
    />
  );
}
