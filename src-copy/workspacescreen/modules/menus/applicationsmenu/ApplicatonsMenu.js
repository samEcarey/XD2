import React from "react";
import { ApplicationsMenuStyled } from "./styles";
import {
	SkeletonCircle,
	SkeletonSquare,
	SkeletonRectangle,
	SkeletonBone
} from "../../../../appbase";
import { SKELETON_TINT } from "../../../../appdata";

export function ApplicatonsMenu() {
	return (
		<ApplicationsMenuStyled>
			<li>
				<a href="">
					<SkeletonSquare />
				</a>
			</li>
			<li>
				<a href="">
					<SkeletonSquare />
				</a>
			</li>
			<li>
				<a href="">
					<SkeletonSquare />
				</a>
			</li>
			<li>
				<a href="">
					<SkeletonSquare />
				</a>
			</li>
		</ApplicationsMenuStyled>
	);
}
