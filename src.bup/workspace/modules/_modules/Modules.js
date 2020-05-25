import React from "react";
import { ModuleStyled } from "./styles";
import {
	ModuleAside,
	ModuleContent,
	Overlay,
	ModuleAsideToggleButton,
	ModuleMain,
	OverlayAgency,
	Help
} from "./components";
import { HelpDrawer } from "./helpdrawer";

export class Modules extends React.Component {
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
			<ModuleStyled>
				<ModuleAside brand="ONDUTY" />
				<ModuleContent>
					<ModuleAsideToggleButton toggleSidebar={this.toggleSidebar} />
					<ModuleMain />
					<Overlay toggleSidebar={this.toggleSidebar} />
					<Help />
					<OverlayAgency />
				</ModuleContent>
			</ModuleStyled>
		);
	}
}
