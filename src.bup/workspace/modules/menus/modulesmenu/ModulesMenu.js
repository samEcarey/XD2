import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModulesMenuULStyled } from "./styles";
import { SkeletonCircle, SkeletonCircleLoader } from "app/common";

export function ModulesMenu() {

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
				</>
			
			:
				<>
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
				</>
			}
		</ModulesMenuULStyled>
	);
}
