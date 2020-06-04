import React from "react";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_BORDER_RADIUS } from "app/data";

export const SkeletonBone = ({ children }) => {
	return (
		<StyledSkeletonBone className="Skeleton-bone">
			{children}
		</StyledSkeletonBone>
	);
};

const StyledSkeletonBone = styled.div`
	margin: 0 0 0.2rem 0;
	padding: 0;
	width: 20rem;
	height: 1.4rem;
	background-color: ${SKELETON_COLOR};
	border-radius: ${SKELETON_BORDER_RADIUS};
`;
