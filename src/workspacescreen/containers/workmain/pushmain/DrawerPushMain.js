import React from "react";
import styled from "styled-components";
import {
	Sidebar,
	ContentContainer,
	Overlay,
	SidebarToggleButton,
	RandomContent
} from "./components";

export class DrawerPushMain extends React.Component {
	state = { sidebarIsOpen: false };

	toggleSidebar = () => {
		//I'm not thrilled about reaching out to the DOM here, but I also don't
		//want to make another wrapper just for the body element. Maybe later...
		const body = document.getElementsByTagName("article")[0];
		const overlay = document.getElementsByClassName(
			"content-container-overlay"
		)[0];

		if (!this.state.sidebarIsOpen) {
			this.setState({ sidebarIsOpen: true });
			body.classList.add("open");
			overlay.style.display = "block";
			//Allow sufficient time for display = "block" to take effect before
			//adding .active (in order for the transition to work);
			setTimeout(() => {
				overlay.classList.add("active");
			}, 100);
		} else {
			this.setState({ sidebarIsOpen: false });
			body.classList.remove("open");
			overlay.classList.remove("active");
			//Set it back to display: block once the transition is complete.
			setTimeout(() => {
				overlay.style.display = "none";
			}, 350);
		}
	};

	render() {
		return (
			<StyledArticle>
				<Sidebar brand="ONDUTY" />
				<ContentContainer>
					<Overlay toggleSidebar={this.toggleSidebar} />
					<SidebarToggleButton toggleSidebar={this.toggleSidebar} />
					<RandomContent />
				</ContentContainer>
			</StyledArticle>
		);
	}
}

const StyledArticle = styled.article`
	display: flex;

	/* article.open */
	/* .open is applied to the body element programmatically.
	In such cases we want it to affect the child #sidebar element
	(nav#sidebar) such that the transform: translateX(-300px) on #sidebar is changed
	to transform: translateX(0px); */
	&.open {
		/* transform: translateX(0px); */
		#sidebar {
			/* transform: translateX(0px); */
		}
		.content-container {
			/* Remove this line, and the sidebar will slide over .content-container, without pushing it. */
			transform: translateX(300px);
			/* margin-left: 0px; */
			&:after {
				-webkit-backdrop-filter: blur(10px);
				backdrop-filter: blur(10px);
			}
		}
		&#sidebar-toggle-button:before,
		&#sidebar-toggle-button:after {
			transform: rotate(45deg);
		}
	}
`;
