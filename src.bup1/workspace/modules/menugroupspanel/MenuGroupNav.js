import React from "react";
import { Container } from "workspace/layout";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./components";

export function MenuGroupNav() {
	return (
		<Container.MenuGroupNav className="Container-menugroupnav">
			<div className="Card">
				<MenuGroupTitle
					menugroupbrand="Customer Service Agent"
					menugroupagent="Customer Service Agent"
				/>
			</div>
			<div className="Card">
				<div className="Card-leftspace">
					<MenuGroupName menugroupfriendlyname="Extraduty Jobs" />
				</div>
				<MenuGroupMenu
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
					one="Create a New Employer"
					two="Edit an Employer"
					three="Deactivate an Employer"
					four="Tableapp Demo"
				/>
			</div>
		</Container.MenuGroupNav>
	);
}
