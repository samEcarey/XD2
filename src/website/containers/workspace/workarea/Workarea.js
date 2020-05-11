import React, { useEffect } from "react";
import styled from "styled-components";
import { DrawerLeftMobile } from "../../../../applayout";
import { AppsMenu } from "../../../menus";

import { Main } from "./main";

import { useGlobalState } from "../../../../appdata/components/useGlobalStateFunc";

import useFullscreenStatus from "../../../../appsystem/hooks/fullscreen/useFullscreenStatus";
import { FaExpandArrowsAlt } from "react-icons/fa";

export function Workarea() {
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
		<StyledSection className="Workspace-workarea">
			<header className="Workarea-header">
				<h1>Header</h1>
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
				<DrawerLeftMobile>
					<AppsMenu />
				</DrawerLeftMobile>
			</header>
			<Main />
		</StyledSection>
	);
}

const StyledSection = styled.section`
	background-color: #f9f9f9;
	.Workarea-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
		align-content: center;

		padding: 1rem 1.5rem 1rem 1.5rem;
		h1 {
			margin: 0;
			font-size: 3.4rem;
		}
		background: navy;
	}
`;
