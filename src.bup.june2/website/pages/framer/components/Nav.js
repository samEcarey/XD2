import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

//** in Framer.js or Header.js */
// const [isNavOpen, setIsNavOpen] = useState(false);
// <Menu onClick={() => setIsNavOpen(true)} />
// <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

//** in Menu.js */
// const Menu = (props) => (
// 	<svg viewBox="0 0 18 15" width="20" {...props}></svg> ...

const variants = {
	open: { x: 0 },
	closed: { x: "-100%" }
};

const links = ["one", "two", "three", "four"];

export const Nav = ({ isNavOpen, setIsNavOpen }) => {
	return (
		<StyledNav
			variants={variants}
			initial="closed"
			animate={isNavOpen ? "open" : "closed"}
			transition={{ damping: 300, duration: 0.2 }}
		>
			<button onClick={() => setIsNavOpen(false)}>Close</button>
			<ul>
				<motion.li variants={variants}>
					<a href="#">One</a>
				</motion.li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	position: fixed;
	top: 0;
	left: 0;
	padding: 40px;
	width: 30rem; /* width: ; 100vw; */
	height: 100vw;
	background: var(--black);
	button {
		all: revert;
		cursor: pointer;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			margin: 0 0 1rem;
			padding: 0;
			font-size: 2rem;
			a {
				color: white;
				text-decoration: none;
				transition: 0.3s ease border;
				border-bottom: 0.2rem transparent solid;
				&:hover {
					border-bottom: 0.2rem var(--blue) solid;
				}
			}
		}
	}
`;
