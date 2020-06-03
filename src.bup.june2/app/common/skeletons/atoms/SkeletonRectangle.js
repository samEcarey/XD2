import React from "react";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS } from "app/data";

export const SkeletonRectangle = ({ children }) => {
	return (
		<StyledSkeletonRectangle className="Skeleton-rectangle">
			{children}
		</StyledSkeletonRectangle>
	);
};

const StyledSkeletonRectangle = styled.div`
	margin: 0;
	padding: 0;
	width: 20rem;
	height: 4rem;
	background-color: ${SKELETON_COLOR};
	border-radius: ${SKELETON_BORDER_RADIUS};
`;
