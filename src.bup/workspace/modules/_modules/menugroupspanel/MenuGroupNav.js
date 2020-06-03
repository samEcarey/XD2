import React, { useState } from "react";
import { Container } from "workspace/layout";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./components";

export function MenuGroupNav() {
	const [openMenuGroup, SetOpenMenuGroup] = useState("Extraduty Jobs")
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
					<MenuGroupName menugroupfriendlyname="Extraduty Jobs" openMenuGroup={openMenuGroup} SetOpenMenuGroup={SetOpenMenuGroup} />
				</div>
				{openMenuGroup === "Extraduty Jobs" ?
				<MenuGroupMenu
					one="Create New Job"
					two="Split Job"
					three="Quote a Job"
					four="Tableapp Demo"
				/>
				: null }
			</div>
			<div className="Card">
				<div className="Card-leftspace">
					<MenuGroupName menugroupfriendlyname="Extraduty Employers" openMenuGroup={openMenuGroup} SetOpenMenuGroup={SetOpenMenuGroup} />
				</div>
				{openMenuGroup === "Extraduty Employers" ?
				<MenuGroupMenu
					one="Create a New Employer"
					two="Edit an Employer"
					three="Deactivate an Employer"
					four="Tableapp Demo"
				/>
				: null }
			</div>
		</Container.MenuGroupNav>
	);
}
