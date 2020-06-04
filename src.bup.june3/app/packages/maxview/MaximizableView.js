import React, { useEffect } from "react";
import { MaximizableViewStyled } from "./styles";
import { useAppGlobalState } from "app/data";

export function MaximizableView({ children, backgroundColor }) {
	const maximizableElement = React.useRef(null);
	const [state, dispatch] = useAppGlobalState();

	useEffect(() => {
		dispatch({ fullscreenRef: maximizableElement });
	}, [maximizableElement]);

	return (
		<MaximizableViewStyled>
			<div
				ref={maximizableElement}
				className={`maximizable-container ${
					state.isFullscreen ? "fullscreen" : "default"
				}`}
				style={{ backgroundColor: state.isFullscreen ? backgroundColor : null }}
			>
				<div className="maximizable-content">{children}</div>
			</div>
		</MaximizableViewStyled>
	);
}
