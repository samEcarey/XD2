import React from "react";
import styled from "styled-components";

export const SkeletonShape = ({ children }) => {
	return (
		<StyledSkeletonShape className="Skeleton-shape">
			{children}
		</StyledSkeletonShape>
	);
};

const StyledSkeletonShape = styled.div`
	margin: 0;
	padding: 0;
	width: 4rem;
	height: 20rem;
	background-color: rgba(26, 29, 31, 0.4);
`;
