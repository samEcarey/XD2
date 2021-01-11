import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppGlobalState, useUser } from "app/data";
import { ModulesMenuULStyled,BrandModuleStyled } from "./styles";
import { SkeletonCircleLoader } from "app/common";
import {  IconOdBadge, IconDashboard,LogoExtraDutyStacked } from "./assets";
import{IconXdBadge} from 'app/assets'
import { ModuleMenuGroup } from "./Menus";
import { IconMoreVertical } from "app/assets";

export function ModuleMenu() {
	const user = useUser();
	const [overlayMenugroup, SetOverlayMenugroup] = useState(false);
	const [applications, setApplications] = useState([])
	const [state, dispatch] = useAppGlobalState();
	const [moduleVisible, setModuleVisible] = useState(true);
	const handleModule = (a, m) => {
		SetOverlayMenugroup(true);
		dispatch({ appValue: a.friendlyname });
		dispatch({ moduleValue: m.friendlyname });
		dispatch({ moduleDescription: m.description });
		dispatch({ moduleMenus: m.menus });
		dispatch({ currentAgencies: m.agencies });
		

	};

	useEffect(()=>{
		if(user.userState){
			console.log(user.userState)
			setApplications(
				user.userState.usercontext[0].applications
			)
			
		}
		
		
	},[user.userState])

	const Apps = () => {
		return applications.map(a => {
			let icon;
			if (a.friendlyname == "Xtra Duty") {
				icon = <IconXdBadge />;
			} else {
				icon = <IconOdBadge />;
			}
			return (
				<>
					<div>
						<NavLink to="/workspace"
							onClick={() => {
								setModuleVisible(!moduleVisible)
							}}
						>
							<div style={{margin:"3%"}}>{icon}</div>
						</NavLink>
						{a.modules.map(m => {
							return (
								 moduleVisible ? (<NavLink
									to="/workspace"
									onClick={() => handleModule(a, m)}
									className={
										state.appValue === a.friendlyname &&
										state.moduleValue === m.friendlyname
											? "active"
											: ""
									}
								>
									<li >
										{" "}
										<b style={{ fontSize: "1rem", color: "white" }}>
											{m.shortname.toUpperCase()}
										</b>
									</li>
								</NavLink>):(null)
							);
						})}
					</div>
				</>
			);
		});
	};

	return (
		<>
			<ModulesMenuULStyled>
				{user.userState ? (
					<div><Apps></Apps></div>
				) : (
					<>
						<li>
							<NavLink to="">
								<SkeletonCircleLoader />
							</NavLink>
						</li>
						<li>
							<NavLink to="">
								<SkeletonCircleLoader />
							</NavLink>
						</li>
						<li>
							<NavLink to="">
								<SkeletonCircleLoader />
							</NavLink>
						</li>
						<li>
							<NavLink to="">
								<SkeletonCircleLoader />
							</NavLink>
						</li>
					</>
				)}
			</ModulesMenuULStyled>

			{/* Overlay Menugroup include with state */}
			<ModuleMenuGroup
				overlayMenugroup={overlayMenugroup}
				SetOverlayMenugroup={SetOverlayMenugroup}
			/>
		</>
	);
}

export * from "./styles";
export * from "./UserActions";
export * from "./UserLogOff";
export * from "./Nav";
