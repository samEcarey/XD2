import React from "react";
import { ModuleComponentStyled } from './styles'
import {
	Sidebar,
	ContentContainer,
	Overlay,
	SidebarToggleButton,
	RandomContent,
	OverlayMenu
} from "./components";

export class ModuleComponent extends React.Component {
	state = { sidebarIsOpen: false };

	toggleSidebar = () => {
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
			<ModuleComponentStyled>
				<Sidebar brand="ONDUTY" />
				<ContentContainer>
					<OverlayMenu />
					<Overlay toggleSidebar={this.toggleSidebar} />
					<SidebarToggleButton toggleSidebar={this.toggleSidebar} />
					<RandomContent />
				</ContentContainer>
			</ModuleComponentStyled>
		);
	}
}
