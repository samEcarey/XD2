import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModulesMenuULStyled } from "./styles";
import { SkeletonCircle, SkeletonCircleLoader } from "app/common";
import { IconSearchLoading } from "./assets";
import { OverlayMenugroups } from "../../overlaymenugroups";

export function ModulesMenu() {
	const [overlayMenugroup, SetOverlayMenugroup] = useState(false)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// set the loading state to true for 3 seconds
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
		<ModulesMenuULStyled>
			{loading ?
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
				</>
			
			:
				<>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayMenugroup(true)}>
						<IconSearchLoading />
					</Link>
				</li>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayMenugroup(true)}>
						<IconSearchLoading />	
					</Link>
				</li>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayMenugroup(true)}>
						<IconSearchLoading />	
					</Link>
				</li>
				</>
			}
		</ModulesMenuULStyled>
		
		{/* Overlay Menugroup include with state */}
		<OverlayMenugroups overlayMenugroup={overlayMenugroup} SetOverlayMenugroup={SetOverlayMenugroup} />
		</>
	);
}
