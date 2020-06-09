import React from "react";
import { useAppGlobalState } from "app/data";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./components";
import { OverlayMenugroupsStyled } from "./styles";
import { IconClose} from "./assets";

export function OverlayMenugroups({overlayMenugroup, SetOverlayMenugroup}) {

	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "calc(100vh - 8rem)", opacity: 1}
	};

	const [state, dispatch] = useAppGlobalState();

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
					menugroupbrand={`${state.moduleValue} Agent`} 
					menugroupagent={`${state.moduleValue} Agent`} 
				/>
			</div>
			<div className="Card-menugroup">
				<div className="Card">
					<div className="Card-leftspace">
						<MenuGroupName menugroupfriendlyname={`${state.appValue} Jobs`} />
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
						<MenuGroupName menugroupfriendlyname={`${state.appValue} Employers`} />
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