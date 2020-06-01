import React from "react";
import { Container } from "../../components";
import { Flex } from "app/layout";
import { ModulesNav, ApplicationsNav, UserActionsNav } from "workspace/modules";

export function Workaside() {
	return (
		<Container.Workaside className="Container-workaside">
			<div className="Flexflow-workaside">
				<ModulesNav />
				<ApplicationsNav />
				<UserActionsNav />
			</div>
		</Container.Workaside>
	);
}
