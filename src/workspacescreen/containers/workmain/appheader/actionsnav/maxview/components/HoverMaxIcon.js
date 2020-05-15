import React, { useRef, useState, useEffect } from "react";
import { IconMaximize, IconMaximizeAlt } from "../assets";

// Usage
export function HoverMaxIcon() {
	const [hoverRef, isHovered] = useHoverMaxIcon();

	return (
		<div ref={hoverRef}>
			{isHovered ? <IconMaximizeAlt /> : <IconMaximize />}
		</div>
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
