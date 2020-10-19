import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuGroupMenuStyled } from "../styles";
import { ModuleMenuGroupWorkflow } from "../Workflow";
import {useAppGlobalState} from 'app/data'
import { ModuleMenuGroup } from "..";

export function MenuGroupMenu({ moduleMenuMenuGroups, SetOverlayMenugroup }) {
	const [overlayWorkflow, SetOverlayWorkflow] = useState(false);
	const [state,dispatch] = useAppGlobalState();
	const [menugroups, setMenugroups] = useState([])

	const [workflows, setWorkflows] = useState()
	useEffect(()=>{
		console.log("--setModuleMenu menugroups--")
		setMenugroups(moduleMenuMenuGroups)
	},[])

	useEffect(()=>{
		if(menugroups){
			console.log("-- workflows--")

			setWorkflows(moduleMenuMenuGroups.workflows)
		}
	},[menugroups])

	
	return (
		<>
	{moduleMenuMenuGroups.map(menugroup => {
			//	console.log("MENUGROUP.WORKFLOWS ", menugroup)
				return (
					<div>
						<MenuGroupMenuStyled className="MenuGroupNav-menu">
							<ul>
								<li>
									<Link
										onClick={() => {
										//	dispatch({moduleMenuGroupWorkflows:menugroup.workflows})
										//	console.log("?>>>>>>>>")
											SetOverlayWorkflow(true);
										}}
									>
										{menugroup.friendlyname}
									</Link>
								</li>
							</ul>
						</MenuGroupMenuStyled>
						<ModuleMenuGroupWorkflow
						workflows={menugroup.workflows}
							overlayWorkflow={overlayWorkflow}
							SetOverlayWorkflow={SetOverlayWorkflow}
							SetOverlayMenugroup={SetOverlayMenugroup}
						/>
					</div>
				);
			})}
		<moduleMenuMenuGroups/>
			{/* Overlay Workflow include with state */}
		</>
	);
}

export * from "./MenuGroupTitle";
export * from "./MenuGroupName";
