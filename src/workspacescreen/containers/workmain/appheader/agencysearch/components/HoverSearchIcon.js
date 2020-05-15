import React, { useRef, useState, useEffect } from "react";
import { IconSearch, IconSearchLoading } from "../assets";

// Usage
export function HoverSearchIcon() {
	const [hoverRef, isHovered] = useHoverSearchIcon();

	return (
		<div ref={hoverRef}>
			{isHovered ? <IconSearchLoading /> : <IconSearch />}
		</div>
	);
	// return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}

// Hook
function useHoverSearchIcon() {
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
