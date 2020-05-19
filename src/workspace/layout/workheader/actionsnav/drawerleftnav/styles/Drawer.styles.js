import styled from "styled-components";
import { motion } from "framer-motion";

export const DrawerStyled = styled(motion.section)`
	z-index: 9999;
	position: fixed;
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	top: 0;
	left: 0;
	width: 300px;
	height: 100vh;
	border-right: 1px solid #e1e1e1;
	background-color: WHITE;
	nav.Drawer-brandclose {
		padding: 1.5rem;
		border-bottom: 1px solid #f1f1f1;
		background-color: WHITE;
		button {
			margin-top: 1.5rem;
			svg {
				margin: 0rem;
				padding: 0rem;
				width: 2.4rem;
				height: 2.4rem;
				fill: rgba(26, 29, 31, 0.4);
				&:hover {
					fill: rgba(26, 29, 31, 0.6);
					cursor: pointer;
				}
				@media (min-width: 1024px) {
					margin-right: 1.5rem;
					visibility: hidden;
				}
			}
		}
	}

	nav {
	}
`;
