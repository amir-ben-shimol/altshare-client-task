import React from "react";

import type { IPieChartData } from "../../../../interfaces/pieChartData";

import PieChartView from "./PieChart.view";

interface IProps {
  readonly pieChartData: IPieChartData[];
}

const PieChart: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <PieChartView pieChartData={props.pieChartData} />;
};

PieChart.displayName = "PieChart";
PieChart.defaultProps = {};

export default React.memo(PieChart);
