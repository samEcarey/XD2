import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const AgencySwtr = () => {
	const [isOpen, setIsOpen] = useState(false);

	const rotate = {
		hidden: { rotate: "0deg", scale: 2 },
		visible: {
			rotate: "45deg",
			scale: 2
		}
	};

	const menu = {
		hidden: {
			top: "-100vh"
		},
		visible: {
			top: 0
		}
	};

	const item = {
		hidden: { y: 0, opacity: 0 },
		visible: {
			y: 20,
			opacity: 1
		}
	};

	return (
		<StyledASMenu className="">
			<Rotate
				onClick={() => setIsOpen(open => !open)}
				variants={rotate}
				initial={false}
				animate={isOpen ? "visible" : "hidden"}
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
			</Rotate>
			<Menu
				variants={menu}
				initial={false}
				animate={isOpen ? "visible" : "hidden"}
			>
				<h1>HOME</h1>
				<h1>WORK</h1>
				<h1>ABOUT</h1>
			</Menu>
		</StyledASMenu>
	);
};

const StyledASMenu = styled.div`
	z-index: 1;
`;

const Menu = styled(motion.div)`
	z-index: 1;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vh;
	height: 100vh;
	top: -90vh;
	background: red;
`;

const Rotate = styled(motion.svg)`
	z-index: 2;
	position: fixed;
	top: 6rem;
	right: 1.5rem;
`;
