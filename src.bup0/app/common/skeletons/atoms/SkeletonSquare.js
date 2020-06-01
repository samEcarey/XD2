import React from "react";
// import {} from "./Skeletons.styles";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS } from "app/data";

export const SkeletonSquare = ({ children }) => {
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
	background-color: ${SKELETON_COLOR};
	border-radius: ${SKELETON_BORDER_RADIUS};
`;
