import React from 'react';

import ButtonView from './Button.view';

interface IProps {
	readonly isClicked: boolean;
	readonly onClick: () => void;
}

const Button: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <ButtonView isClicked={props.isClicked} onClick={props.onClick} />;
};

Button.displayName = 'Button';
Button.defaultProps = {};

export default React.memo(Button);
