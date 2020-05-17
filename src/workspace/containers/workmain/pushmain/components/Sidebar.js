import React from "react";
import styled from "styled-components";
import { SKELETON_COLOR, SKELETON_SHADE, SKELETON_TINT } from "app/data";

export const Sidebar = props => {
	return (
		<StyledNav id="">
			<div className="brand">{props.brand}</div>
			<ul>
				<li>
					<a href="#">Item 1</a>
				</li>
				<li>
					<a href="#">Item 2</a>
				</li>
				<li>
					<a href="#">Item 3</a>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	padding: 5rem 3rem 5rem 3rem;
	width: 30rem;
	height: 100%;
	/* text-align: center; */
	/* background: #12c2e9;
	background: -webkit-linear-gradient(0deg, #f64f59, #c471ed, #12c2e9);
	background: linear-gradient(0deg, #f64f59, #c471ed, #12c2e9); */
	background-color: ${SKELETON_SHADE};
	background-size: 175%;
	border-right: 0.1rem solid WHITE;
	/* transition: all 0.3s ease-in; */
	.brand {
		height: 6rem;
		font-size: 3rem;
		color: WHITE;
		font-weight: 900;
		line-height: 0.75;
	}
	ul {
		margin: 3rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		li {
			margin: 0rem 0rem 2.5rem 0rem;
			list-style-type: none;
			border-top: 1px solid WHITE;
			&:last-of-type {
				border-bottom: 1px solid WHITE;
			}
			a {
				display: block;
				padding: 2.5rem 0rem 2.5rem 0rem;
				color: WHITE;
				text-decoration: none;
				text-transform: uppercase;
				/* transition: all 0.3s ease; */
				&:hover {
					/* letter-spacing: 0.5rem; */
					color: BLACK;
					font-weight: bold;
					/* transform: scale(1.25); */
					/* text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.15); */
				}
			}
		}
	}
`;
