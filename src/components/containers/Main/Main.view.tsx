import React from "react";

import type { IPieChartData } from "../../../interfaces/pieChartData";
import type { ICurrencyData } from "../../../interfaces/currencyData";
import { concatClasses } from "../../../utils/component";

import Button from "../../ui/Button";
import PieChart from "./PieChart";

import classes from "./Main.module.scss";
import CurrencyDetails from "./CurrencyDetails";

interface IProps {
  readonly isButtonClicked: boolean;
  readonly pieChartData: IPieChartData[];
  readonly currencyData: ICurrencyData | null;
  readonly onButtonClick: () => void;
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  let buttonClass;
  let pieChartClass;
  let currencyDetailsClass;

  if (props.isButtonClicked) {
    buttonClass = concatClasses(classes, "button", "button--clicked");
    pieChartClass = concatClasses(classes, "pieChart", "pieChart--visible");
    currencyDetailsClass = concatClasses(
      classes,
      "currencyDetails",
      "currencyDetails--clicked"
    );
  } else {
    buttonClass = classes["button"];
    pieChartClass = concatClasses(classes, "pieChart", "pieChart--invisible");
    currencyDetailsClass = classes["currencyDetails"];
  }

  return (
    <main className={classes["container"]}>
      <div className={buttonClass}>
        <Button
          isClicked={props.isButtonClicked}
          onClick={props.onButtonClick}
        />
      </div>
      {props.isButtonClicked && (
        <div className={pieChartClass}>
          <PieChart pieChartData={props.pieChartData} />
        </div>
      )}
      {props.currencyData && (
        <div className={currencyDetailsClass}>
          <CurrencyDetails currencyData={props.currencyData} />
        </div>
      )}
    </main>
  );
};

MainView.displayName = "MainView";
MainView.defaultProps = {};

export default React.memo(MainView);
