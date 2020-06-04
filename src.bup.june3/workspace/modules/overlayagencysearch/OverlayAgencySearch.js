import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { OverlayAgencySearchStyled } from "./styles";
import { AgencySearchResults } from "./components"


export const OverlayAgencySearch = (props) => {
	const { isAgencyOverlay, setIsAgencyOverlay } = props

	const rotate = {
		hidden: { rotate: "0deg", scale: 2, display: "none" },
		visible: { rotate: "45deg", scale: 2, display: "block" }
	};

	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "100%", opacity: 1}
	};

	return (
		
		<OverlayAgencySearchStyled
			className="Agency-search-overlay"
			variants={overlay}
			initial={false}
			animate={isAgencyOverlay ? "visible" : "hidden"}
		>
			<RotateStyled
				onClick={() => setIsAgencyOverlay(!isAgencyOverlay)}
				variants={rotate}
				initial={false}
				animate={isAgencyOverlay ? "visible" : "hidden"}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
				d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
				fill="currentColor"
				/>
			</RotateStyled>
			
			<AgencySearchResults {...props} />
			
		</OverlayAgencySearchStyled>
		
	);
};

const RotateStyled = styled(motion.svg)`
	position: absolute;
	right: 1rem;
	top: 0rem;
	z-index: 10;
	cursor: pointer;
	color: White;
	width: 30px;
	height: 30px;
`;
