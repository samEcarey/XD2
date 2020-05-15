import React from "react";
import styled from "styled-components";

export const RandomContent = () => {
	return (
		<React.Fragment>
			<h1 className="fancy-h1">React Sidebar Push</h1>
			<StyledArticle className="article float-shadow">
				<h2 className="fancy-h2">Overview:</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
					et ante et egestas. Sed tristique tincidunt massa non egestas.
					Maecenas ultricies est sed enim laoreet, vitae faucibus turpis
					accumsan. Pellentesque maximus tortor eget metus placerat, ac
					tincidunt velit volutpat. In ornare, ipsum vel eleifend tincidunt,
					lorem velit pulvinar enim, quis feugiat libero tortor ut sem. Duis
					ornare a ligula ac ultricies. Nullam porttitor turpis sagittis tellus
					efficitur, quis interdum lectus semper. Phasellus auctor felis lectus,
					vel lacinia nulla blandit eget.
				</p>
			</StyledArticle>
		</React.Fragment>
	);
};

const StyledArticle = styled.article`
	.float-shadow {
		position: relative;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		transform: translateY(-20px);
	}

	.float-shadow:before {
		content: "";
		position: absolute;
		top: 100%;
		left: 7.5%; /* Assuming the width is 85%. */
		width: 85%;
		height: 1.5rem; /* was 10px */
		background: -webkit-radial-gradient(
			center,
			ellipse,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0) 80%
		);
		background: radial-gradient(
			ellipse at center,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0) 80%
		);
		transform: translateY(20px);
		z-index: -1;
	}
`;
