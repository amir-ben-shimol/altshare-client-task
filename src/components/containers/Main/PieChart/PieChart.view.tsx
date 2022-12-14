import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import type { IPieChartData } from "../../../../interfaces/pieChartData";

import classes from "./PieChart.module.scss";

interface IProps {
  readonly pieChartData: IPieChartData[];
}

const PieChartView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <div className={classes["container"]}>
      <PieChart data={props.pieChartData} />
    </div>
  );
};

PieChartView.displayName = "PieChartView";
PieChartView.defaultProps = {};

export default React.memo(PieChartView);
