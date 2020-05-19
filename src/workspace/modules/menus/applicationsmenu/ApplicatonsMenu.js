import React from "react";
import { Link } from "react-router-dom";
import { ApplicationsMenuULStyled } from "./styles";
import { SkeletonSquare } from "app/common";

export function ApplicatonsMenu() {
	return (
		<ApplicationsMenuULStyled>
			<li className="active">
				<Link to="">
					<SkeletonSquare>
						<span>Extra Duty</span>
					</SkeletonSquare>
				</Link>
			</li>
			<li>
				<Link to="">
					<SkeletonSquare>
						<span>OnDuty</span>
					</SkeletonSquare>
				</Link>
			</li>
		</ApplicationsMenuULStyled>
	);
}
