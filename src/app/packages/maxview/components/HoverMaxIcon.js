import React, { useRef, useState, useEffect } from "react";
import { useAppGlobalState } from "app/data";
import { useFullscreenStatus } from "../hooks";
import { HoverMaxIconStyled } from "../styles";
import { IconMaximize, IconMaximizeAlt } from "../assets";

// Usage
export function HoverMaxIcon() {
	const [hoverRef, isHovered] = useHoverMaxIcon();

	const [state, dispatch] = useAppGlobalState();
	let isFullscreen, setIsFullscreen, errorMessage;

	try {
		[isFullscreen, setIsFullscreen] = useFullscreenStatus(
			state,
			dispatch,
			state.fullscreenRef
		);
	} catch (e) {
		errorMessage = "Fullscreen not supported";
		isFullscreen = false;
		setIsFullscreen = undefined;
	}

	const handleExitFullscreen = () => document.exitFullscreen();

	return (
		<HoverMaxIconStyled ref={hoverRef} className="Hover-max-icon">
			
			{errorMessage ? (
				<button
					onClick={() =>
						alert(
							"Fullscreen is unsupported by this browser, please try another browser."
						)
					}
				>
					{errorMessage}
				</button>
			) : isFullscreen ? (
				<button onClick={handleExitFullscreen}>Exit Fullscreen</button>
			) : (
				isHovered ? <span onClick={setIsFullscreen}><IconMaximizeAlt /></span>: <IconMaximize />
			)}
		</HoverMaxIconStyled>
	);
	// return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}

// Hook
function useHoverMaxIcon() {
	const [value, setValue] = useState(false);
	const ref = useRef(null);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);

	useEffect(
		() => {
			const node = ref.current;
			if (node) {
				node.addEventListener("mouseover", handleMouseOver);
				node.addEventListener("mouseout", handleMouseOut);

				return () => {
					node.removeEventListener("mouseover", handleMouseOver);
					node.removeEventListener("mouseout", handleMouseOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);

	return [ref, value];
}
