import React from "react";
import { Container } from "../../components";
import { Flex } from "app/layout";
import { ModulesNav, SearchAgencyNav, UserActionsNav, UserLogOffNav } from "workspace/modules";

export function Workaside() {
	return (
		<Container.Workaside className="Container-workaside">
			<div className="Flexflow-workaside">
				<SearchAgencyNav />
				<ModulesNav />
				<UserActionsNav />
				<UserLogOffNav />
			</div>
		</Container.Workaside>
	);
}
