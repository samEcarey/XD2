import React from "react";
import classNames from "classnames";
import { StyledButton } from "./Button.styles";

import {
	compoundButtonPrimary,
	compoundButtonSecondary,
	compoundButtonTertiary,
	compoundButtonInfo,
	compoundButtonSuccess,
	compoundButtonWarning,
	compoundButtonDanger,
	compoundButtonDark,
	compoundButtonMedium,
	compoundButtonLight
} from "./compounds";

export function Button({ classes, children, ...restProps }) {
	return (
		<button className={classNames("button", classes)} {...restProps}>
			{children}
		</button>
	);
}

/** Compounds */
Button.Primary = compoundButtonPrimary;
Button.Secondary = compoundButtonSecondary;
Button.Tertiary = compoundButtonTertiary;
Button.Info = compoundButtonInfo;
Button.Success = compoundButtonSuccess;
Button.Warning = compoundButtonWarning;
Button.Danger = compoundButtonDanger;
Button.Dark = compoundButtonDark;
Button.Medium = compoundButtonMedium;
Button.Light = compoundButtonLight;
