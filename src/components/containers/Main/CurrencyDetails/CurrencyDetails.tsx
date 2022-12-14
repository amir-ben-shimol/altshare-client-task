import React from "react";

import type { ICurrencyData } from "../../../../interfaces/currencyData";

import CurrencyDetailsView from "./CurrencyDetails.view";

interface IProps {
  readonly currencyData: ICurrencyData;
}

const CurrencyDetails: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return <CurrencyDetailsView currencyData={props.currencyData} />;
};

CurrencyDetails.displayName = "CurrencyDetails";
CurrencyDetails.defaultProps = {};

export default React.memo(CurrencyDetails);
