import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApplicationsMenuULStyled } from "./styles";
import { SkeletonSquare, SkeletonSquareLoader } from "app/common";

export function ApplicatonsMenu() {

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
		<ApplicationsMenuULStyled>
			{loading ?
			<>
			<li className="active">
				<Link to="">
					<SkeletonSquareLoader/>
				</Link>
			</li>
			<li>
				<Link to="">
					<SkeletonSquareLoader/>
				</Link>
			</li>
			</>
			:
			<>
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
			</>
		}
		</ApplicationsMenuULStyled>
	);
}
