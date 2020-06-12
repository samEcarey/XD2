import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppGlobalState } from "app/data";
import { ModulesMenuULStyled } from "./styles";
import { SkeletonCircleLoader } from "app/common";
import {
	IconXdBadge,
	IconOdBadge,
	IconDashboard
} from "./assets";
import { ModuleMenugroups } from "../../modulemenugroups";

export function ModulesMenu() {
	const [overlayMenugroup, SetOverlayMenugroup] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// set the loading state to true for 3 seconds
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	const [state, dispatch] = useAppGlobalState();

	const handleModule = (appname, modulename) => {
		SetOverlayMenugroup(true);
		dispatch({ appValue: appname });
		dispatch({ moduleValue: modulename });
	};

	return (
		<>
			<ModulesMenuULStyled>
				{loading ? (
					<>
						<li>
							<Link to="">
								<SkeletonCircleLoader />
							</Link>
						</li>
						<li>
							<Link to="">
								<SkeletonCircleLoader />
							</Link>
						</li>
						<li>
							<Link to="">
								<SkeletonCircleLoader />
							</Link>
						</li>
						<li>
							<Link to="">
								<SkeletonCircleLoader />
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link
								to="/workspace"
							>
								<IconDashboard />
							</Link>
						</li>
						<li
							className={
								state.appValue === "ExtraDuty" &&
								state.moduleValue === "Customer Service"
									? "active"
									: ""
							}
						>
							<Link
								to="/workspace"
								onClick={() => handleModule("ExtraDuty", "Customer Service")}
							>
								<IconXdBadge />
							</Link>
						</li>
						<li
							className={
								state.appValue === "ExtraDuty" &&
								state.moduleValue === "Accounting"
									? "active"
									: ""
							}
						>
							<Link
								to="/workspace"
								onClick={() => handleModule("ExtraDuty", "Accounting")}
							>
								<IconXdBadge />
							</Link>
						</li>
						<li
							className={
								state.appValue === "OnDuty" &&
								state.moduleValue === "Customer Service"
									? "active"
									: ""
							}
						>
							<Link
								to="/workspace"
								onClick={() => handleModule("OnDuty", "Customer Service")}
							>
								<IconOdBadge />
							</Link>
						</li>
						<li
							className={
								state.appValue === "OnDuty" &&
								state.moduleValue === "Accounting"
									? "active"
									: ""
							}
						>
							<Link
								to="/workspace"
								onClick={() => handleModule("OnDuty", "Accounting")}
							>
								<IconOdBadge />
							</Link>
						</li>
					</>
				)}
			</ModulesMenuULStyled>

			{/* Overlay Menugroup include with state */}
			<ModuleMenugroups
				overlayMenugroup={overlayMenugroup}
				SetOverlayMenugroup={SetOverlayMenugroup}
			/>
		</>
	);
}
