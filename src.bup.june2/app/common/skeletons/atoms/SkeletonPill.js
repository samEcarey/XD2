import React from "react";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS_CIRCLE } from "app/data";

export const SkeletonPill = ({ children }) => {
	return (
		<StyledSkeletonPill className="Skeleton-pill">
			{children}
		</StyledSkeletonPill>
	);
};

const StyledSkeletonPill = styled.div`
	margin: 0;
	padding: 0.8rem 1rem 1rem 1rem;
	width: 10rem;
	height: 4rem;
	text-align: center;
	background-color: ${SKELETON_COLOR};
	border-radius: ${SKELETON_BORDER_RADIUS_CIRCLE};
`;
