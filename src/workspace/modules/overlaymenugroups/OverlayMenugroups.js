import React from "react";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./components";
import { OverlayMenugroupsStyled } from "./styles";
import { IconClose} from "./assets";

export function OverlayMenugroups({overlayMenugroup, SetOverlayMenugroup}) {

	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "calc(100vh - 8rem)", opacity: 1}
	};

	return (
		<OverlayMenugroupsStyled 
			className="Overlay-menugroups"
			variants={overlay}
			initial={overlayMenugroup ? "visible" : "hidden"}
			animate={overlayMenugroup ? "visible" : "hidden"}
		>
			<span className="overlay-close" onClick={() => SetOverlayMenugroup(false)}>
				<IconClose />
			</span>

			<div className="Card">
				<MenuGroupTitle
					menugroupbrand="Customer Service Agent"
					menugroupagent="Customer Service Agent"
				/>
			</div>
			<div className="Card-menugroup">
				<div className="Card">
					<div className="Card-leftspace">
						<MenuGroupName menugroupfriendlyname="Extraduty Jobs" />
					</div>
					<MenuGroupMenu
						SetOverlayMenugroup={SetOverlayMenugroup}
						one="Create New Job"
						two="Split Job"
						three="Quote a Job"
						four="Tableapp Demo"
					/>
				</div>
				<div className="Card">
					<div className="Card-leftspace">
						<MenuGroupName menugroupfriendlyname="Extraduty Employers" />
					</div>
					<MenuGroupMenu
						SetOverlayMenugroup={SetOverlayMenugroup}
						one="Create a New Employer"
						two="Edit an Employer"
						three="Deactivate an Employer"
						four="Tableapp Demo"
					/>
				</div>
			</div>
		</OverlayMenugroupsStyled>
	);
}