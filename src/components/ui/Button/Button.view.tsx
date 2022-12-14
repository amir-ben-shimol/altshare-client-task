import React from "react";

import classes from "./Button.module.scss";

interface IProps {
  readonly isClicked: boolean;
  readonly onClick: () => void;
}

const ButtonView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <button
      type="button"
      className={classes["container"]}
      disabled={props.isClicked}
      onClick={props.onClick}
    >
      Click me
    </button>
  );
};

ButtonView.displayName = "ButtonView";
ButtonView.defaultProps = {};

export default React.memo(ButtonView);
