import React from "react";

import type { ICurrencyData } from "../../../../interfaces/currencyData";
import { concatClasses } from "../../../../utils/component";

import classes from "./CurrencyDetails.module.scss";

interface IProps {
  readonly currencyData: ICurrencyData;
}

const CurrencyDetailsView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["innerRow"]}>
        <span
          className={concatClasses(
            classes,
            "innerRow__title",
            "innerRow__title--key"
          )}
        >
          Name -
        </span>
        &nbsp;
        <span className={classes["innerRow__title"]}>
          {props.currencyData.name}
        </span>
      </div>
      <div className={classes["innerRow"]}>
        <span
          className={concatClasses(
            classes,
            "innerRow__text",
            "innerRow__text--key"
          )}
        >
          Unit -
        </span>
        &nbsp;
        <span className={classes["innerRow__text"]}>
          {props.currencyData.unit}
        </span>
      </div>
      <div className={classes["innerRow"]}>
        <span
          className={concatClasses(
            classes,
            "innerRow__text",
            "innerRow__text--key"
          )}
        >
          Value -
        </span>
        &nbsp;
        <span className={classes["innerRow__text"]}>
          {props.currencyData.value}
        </span>
      </div>
      <div className={classes["innerRow"]}>
        <span
          className={concatClasses(
            classes,
            "innerRow__text",
            "innerRow__text--key"
          )}
        >
          Type -
        </span>
        &nbsp;
        <span className={classes["innerRow__text"]}>
          {props.currencyData.type}
        </span>
      </div>
    </div>
  );
};

CurrencyDetailsView.displayName = "CurrencyDetailsView";
CurrencyDetailsView.defaultProps = {};

export default React.memo(CurrencyDetailsView);
