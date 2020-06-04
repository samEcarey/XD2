import React from "react";
import classNames from "classnames";

// export const FieldGroup = ({ children }) => {
// 	return <div className="fieldgroup">{children}</div>;
// };

export function FieldGroup({ classes, children, ...restProps }) {
	return (
		<div className={classNames("fieldgroup", classes)} {...restProps}>
			{children}
		</div>
	);
}
