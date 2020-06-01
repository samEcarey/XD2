import React from "react";
import { ModuleStyled } from "./styles";
import {
	ModuleAside,
	ModuleContent,
	Overlay,
} from "./components";
import { ModuleHeader } from "./moduleheader"
import { ModuleMain } from "./modulemain"

export class Modules extends React.Component {
	state = { 
		sidebarIsOpen: false,
		moduleLeftSidebar: "closed",  // "open", "closed", "none"   
	};

	componentDidMount() {
		const body = document.getElementsByTagName("article")[0];
		window.addEventListener('resize', () => {
			if(window.innerWidth < 1024) {
				body.classList.remove("open");
				this.setState({ sidebarIsOpen: false });
			}
		}, false);
	}

	toggleSidebar = () => {
		const body = document.getElementsByTagName("article")[0];
		const overlay = document.getElementsByClassName(
			"content-container-overlay"
		)[0];

		if (!this.state.sidebarIsOpen) {
			this.setState({ sidebarIsOpen: true });
			body.classList.add("open");
			overlay.style.display = "block";
			setTimeout(() => {
				overlay.classList.add("active");
			}, 100);
		} else {
			this.setState({ sidebarIsOpen: false });
			body.classList.remove("open");
			overlay.classList.remove("active");
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
					<ModuleHeader toggleSidebar={this.toggleSidebar} sidebarIsOpen={this.state.sidebarIsOpen} />
					<ModuleMain />
					<Overlay toggleSidebar={this.toggleSidebar} />
				</ModuleContent>
			</ModuleStyled>
		);
	}
}
