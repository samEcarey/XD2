import React from "react";
// import {} from "./Skeletons.styles";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS } from "app/data";

export const SkeletonSquareLoader = ({ children }) => {
	return (
		<StyledSkeletonSquare className="Skeleton-square">
			{children}
		</StyledSkeletonSquare>
	);
};

const StyledSkeletonSquare = styled.div`
	margin: 0;
	padding: 0;
	width: 4rem;
	height: 4rem;
	background-color: RED;
	border-radius: ${SKELETON_BORDER_RADIUS};
	background: -webkit-gradient(
		linear,
		left top,
		right top,
		color-stop(8%, RED),
		color-stop(18%, rgba(130, 130, 130, 0.3)),
		color-stop(33%, RED)
	);
	background: linear-gradient(
		to right,
		RED 8%,
		rgba(130, 130, 130, 0.3) 18%,
		RED 33%
	);
	background-size: 800px 100px;
	animation: wave-squares 2s infinite ease-out;
	@keyframes wave-squares {
		0% {
			background-position: -468px 0;
		}
		100% {
			background-position: 468px 0;
		}
	}
`;
