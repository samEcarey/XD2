import React from "react";
import styled from "styled-components";

export function AppsMenu() {
	return (
		<StyledUL>
			<li>
				<a href="#">
					<img src="https://placehold.it/40x40" alt="placeholder" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="https://placehold.it/40x40" alt="placeholder" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="https://placehold.it/40x40" alt="placeholder" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="https://placehold.it/40x40" alt="placeholder" />
				</a>
			</li>
		</StyledUL>
	);
}

const StyledUL = styled.ul`
	margin: 0;
	padding: 1.5rem 0rem 0rem 0rem;
	list-style: none;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	li {
		margin-bottom: 1.5rem;
		a {
			&:hover {
			}
			img {
				border-radius: 2.5rem;
			}
		}
	}
`;
