import React from "react";
import { Flex } from "../../../appdesign";
import { AppLogo } from "./applogo";
import {
	AppActionsNav,
	IconAddCircle,
	IconAddSquare,
	IconLogOff
} from "./appactionsnav";
import { ApplicationsNav } from "./applicationsnav";
import { ModulesNav } from "./modulesnav";
import { WorkasideMenu, ApplicatonsMenu } from "../../modules/menus";

export function Workaside() {
	return (
		<>
			<Flex.ColCenter>
				<AppLogo />
			</Flex.ColCenter>
			<Flex.ColStart classes="Workaside-wrapper">
				<ModulesNav>
					<WorkasideMenu />
				</ModulesNav>
				<Flex.ColBetween classes="Workaside-lowersection">
					<ApplicationsNav>
						<ApplicatonsMenu />
					</ApplicationsNav>
					<AppActionsNav>
						<ul>
							<li>
								<IconAddCircle />
							</li>
							<li>
								<IconAddSquare />
							</li>
							<li>
								<IconLogOff />
							</li>
						</ul>
					</AppActionsNav>
				</Flex.ColBetween>
			</Flex.ColStart>
		</>
	);
}
