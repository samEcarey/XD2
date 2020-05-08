import React from "react";
import styled from "styled-components";
export const BrandEdsHatIcon = () => {
	return (
		<StyledFigure>
			<svg id="logo-eds-hat" viewBox="0 0 168.89 89.69">
				<path
					class="cls-1"
					d="M22.65,89.69a162.52,162.52,0,0,1,82.42-10.91,160.06,160.06,0,0,1,41.15,10.91V80.32c-1.37-.54-2.77-1-4.21-1.54a172.67,172.67,0,0,0-115.14,0c-1.44.5-2.85,1-4.22,1.54Z"
					transform="translate(-0.01 -0.01)"
				/>
				<path
					class="cls-2"
					d="M167.66,58.21a4.64,4.64,0,0,1-.4,6.7L152.69,77.5a172.61,172.61,0,0,0-136.47,0h0L1.65,64.91a4.64,4.64,0,0,1-.4-6.7A34.09,34.09,0,0,0,9.89,39.93C12.27,24.72,11.43,25,32.63,23.72s27.76-7.37,27.76-7.37l6.3-4.75L80.12,1.48A7.06,7.06,0,0,1,83.36.11,6,6,0,0,1,84.47,0a5.77,5.77,0,0,1,1.1.1A6.79,6.79,0,0,1,89,1.48L102.25,11.6l4.19,3.18,2.08,1.57a1.93,1.93,0,0,1,.23.2c1.31,1,8.54,6.06,27.53,7.2,21.2,1.24,20.36,1,22.74,16.18A34.09,34.09,0,0,0,167.66,58.21ZM92.74,40l13.43-9.74H89.56L84.44,14.44,79.31,30.22H62.7L76.13,40,71,55.77,84.44,46l13.43,9.78Z"
					transform="translate(-0.01 -0.01)"
				/>
			</svg>
		</StyledFigure>
	);
};

const StyledFigure = styled.figure`
	display: inline-block;
	margin: 0;
	padding: 1rem 0rem 1.5rem 0.5rem;
	/* background: red; */
	svg {
		fill: #232323;
		width: 38px;
		/* &:hover {
			fill: #fff;
			cursor: pointer;
		} */
		display: block;
		vertical-align: top;
	}
`;
