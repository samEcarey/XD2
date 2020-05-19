import React from "react";
import { Link } from "react-router-dom";
import { ModulesMenuULStyled } from "./styles";
import { SkeletonCircle } from "app/common";

export function ModulesMenu() {
	return (
		<ModulesMenuULStyled>
			<li className="active">
				<Link to="">
					<SkeletonCircle>
						<span>CS</span>
					</SkeletonCircle>
				</Link>
			</li>
			<li>
				<Link to="">
					<SkeletonCircle>
						<span>AC</span>
					</SkeletonCircle>
				</Link>
			</li>
		</ModulesMenuULStyled>
	);
}
