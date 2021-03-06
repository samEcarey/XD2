import React from "react";
import { useAppGlobalState } from "app/data";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./components";
import { ModuleMenugroupsStyled } from "./styles";
import { IconClose} from "./assets";
import {useUser} from "app/data";

export function ModuleMenugroups() {

	const overlay = {
		initial: {
			//opacity: 0, height: "0px",
		},
		in: {
			//height: "calc(100vh - 8rem)", opacity: 1,
		},
		out: {
			//opacity: 0, height: "0px",
		},
	};


	const [state, dispatch] = useAppGlobalState();
	const user = useUser();

	return (
		<ModuleMenugroupsStyled 
			className="Module-menugroups-overlay"
			variants={overlay}
			initial="initial"
			animate="in"
			exit="out"
		>
			<span className="overlay-close">
				<IconClose />
			</span>

			<div className="Card">
				<MenuGroupTitle
					menugroupbrand={`${state.moduleValue}`}
				/>
			</div>
			<div className="Card-menugroup">
				<div className="Card">
					<div className="Card-leftspace">
						<MenuGroupName menugroupfriendlyname={`${state.appValue} Jobs`} />
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
						<MenuGroupName menugroupfriendlyname={`${state.appValue} Employers`} />
					</div>
					<MenuGroupMenu
						one="Create a New Employer"
						two="Edit an Employer"
						three="Deactivate an Employer"
						four="Tableapp Demo"
					/>
				</div>
			</div>
		</ModuleMenugroupsStyled>
	);
}