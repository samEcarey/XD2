import React from "react";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS_CIRCLE } from "app/data";

export const SkeletonCircle = ({ children }) => {
	return (
		<StyledSkeletonCircle className="Skeleton-circle">
			{children}
		</StyledSkeletonCircle>
	);
};

const StyledSkeletonCircle = styled.div`
	margin: 0;
	padding: 0;
	width: 4rem;
	height: 4rem;
	background-color: ${SKELETON_COLOR};
	border-radius: ${SKELETON_BORDER_RADIUS_CIRCLE};
`;
