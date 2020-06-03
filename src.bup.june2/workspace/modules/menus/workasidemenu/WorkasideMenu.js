import React from "react";
import { WorkasideMenuStyled } from "./styles";
import { SkeletonCircle } from "app/common";

export function WorkasideMenu() {
	return (
		<WorkasideMenuStyled>
			<li>
				<a href="">
					<SkeletonCircle />
				</a>
			</li>
			<li>
				<a href="">
					<SkeletonCircle />
				</a>
			</li>
			<li>
				<a href="">
					<SkeletonCircle />
				</a>
			</li>
		</WorkasideMenuStyled>
	);
}
