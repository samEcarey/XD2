import React from "react";
import { ApplicationsMenuStyled } from "./styles";
import {
	SkeletonCircle,
	SkeletonSquare,
	SkeletonRectangle,
	SkeletonBone
} from "app/common";
import { SKELETON_TINT } from "app/data";

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
