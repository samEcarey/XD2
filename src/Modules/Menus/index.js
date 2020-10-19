import React, { useEffect, useState } from "react";
import { useAppGlobalState, useUser } from "app/data";
import { MenuGroupTitle, MenuGroupName, MenuGroupMenu } from "./Main";
import { ModuleMenugroupsStyled } from "./styles";
import { IconClose } from "./assets";
import { MenuGroupMenuStyled } from "./styles";

export function ModuleMenuGroup({ overlayMenugroup, SetOverlayMenugroup }) {
	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "calc(100vh - 8rem)", opacity: 1 }
	};

	const [state, dispatch] = useAppGlobalState();
	const [moduleMenus, setModuleMenus] = useState([]);

	useEffect(() => {
		if (state.moduleMenus) {
			setModuleMenus(state.moduleMenus)
			
		}
		

	}, [state.moduleMenus]);

	return (
		<ModuleMenugroupsStyled
			className="Module-menugroups-overlay"
			variants={overlay}
			initial={overlayMenugroup ? "visible" : "hidden"}
			animate={overlayMenugroup ? "visible" : "hidden"}
		>
			<span
				className="overlay-close"
				onClick={() => {
					SetOverlayMenugroup(false);
					dispatch({ appValue: "" });
				}}
			>
				<IconClose />
			</span>

			<div className="Card">
				<MenuGroupTitle
					menugroupbrand={`${state.moduleValue}`}
					menugroupdescription={`${state.moduleDescription}`}
				/>
			</div>
			<div className="Card-menugroup">
				{moduleMenus.map(moduleMenu => {
				//dispatch({moduleMenuGroups:moduleMenu.menugroups})
				return (
					<div className="Card">
						{/** MODULE[X]/MENU[X]-*/}
						<MenuGroupName
							menugroupfriendlyname={`${moduleMenu.friendlyname}`}
							menugroupdescription={`${moduleMenu.description}`}
						/>
						{/**MODULE[X]/MENU[X]/[MENUGROUPS] */}
						<MenuGroupMenu
							moduleMenuMenuGroups = {moduleMenu.menugroups}
							SetOverlayMenugroup={SetOverlayMenugroup}
						/>
					
					</div>
				);
				
			})}
			</div>
		</ModuleMenugroupsStyled>
	);
}
