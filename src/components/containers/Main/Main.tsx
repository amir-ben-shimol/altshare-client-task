import React, { useState } from "react";
import axios from "axios";

import type { ICurrencyData } from "../../../interfaces/currencyData";
import type { IPieChartData } from "../../../interfaces/pieChartData";

import MainView from "./Main.view";

interface IProps {}

const Main: React.FC<IProps> = () => {
  const [isButtonClickedState, setIsButtonClickedState] =
    useState<boolean>(false);
  const [pieChartDataState, setPieChartDataState] = useState<IPieChartData[]>(
    []
  );
  const [currencyDataState, setCurrencyDataState] =
    useState<ICurrencyData | null>(null);

  const onButtonClick = () => {
    const numberOfItems = 3;
    const pieChartColors = ["#E38627", "#C13C37", "#6A2135"];
    const pieChartDataArray: IPieChartData[] = [];

    setIsButtonClickedState(() => true);

    for (let i = 0; i < numberOfItems; i++) {
      const randomValue = Math.floor(Math.random() * 100);

      const pieChartData = {
        value: randomValue,
        color: pieChartColors[i] ?? "#000000",
      };

      pieChartDataArray.push(pieChartData);
    }

    setPieChartDataState(() => pieChartDataArray);

    axios
      .get("https://api.coingecko.com/api/v3/exchange_rates")
      .then((response) => {
        if (!response.data) {
          return;
        }

        const currenciesData = response.data.rates.ils;

        setCurrencyDataState(() => currenciesData);
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setIsButtonClickedState(() => false);
      setPieChartDataState(() => []);
    }, 5000);
  };

  return (
    <MainView
      isButtonClicked={isButtonClickedState}
      pieChartData={pieChartDataState}
      currencyData={currencyDataState}
      onButtonClick={onButtonClick}
    />
  );
};

Main.displayName = "Main";
Main.defaultProps = {};

export default React.memo(Main);
