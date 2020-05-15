import React from "react";

import { useGlobalState, useFullscreenStatus } from "./maxview";
import { FaExpandArrowsAlt } from "react-icons/fa";

export function MaxView() {
	const [state, dispatch] = useGlobalState();
	let isFullscreen, setIsFullscreen;
	let errorMessage;

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
		<ActionsNavStyled className="Appheader-actionsnav">
			<Flex.RowEnd>
				<DrawerLeftNav>
					<WorkspaceMenu />
					<ApplicatonsMenu />
				</DrawerLeftNav>
				<div className="maximizable-actions">
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
						// <button className="Max-button" onClick={setIsFullscreen}>
						// 	Fullscreen
						// </button>
						<FaExpandArrowsAlt onClick={setIsFullscreen} />
					)}
				</div>
			</Flex.RowEnd>
		</ActionsNavStyled>
	);
}
