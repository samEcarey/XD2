import React from "react";
import { DashboardCardsStyled } from "../styles";
import { FaStar, FaClipboardCheck, FaHardHat, FaArrowRight } from "react-icons/fa";

export const DashboardCards = () => {
	return (
		<DashboardCardsStyled className="Dashboard-cards">
			<div className="Card">
				<div className="Card-figure">
					<div>
						<FaStar style={{ height: "30px", width: "30px" }} />
					</div>
				</div>
				<div className="Card-info">
					<h3>All-New Design</h3>
					<p>
						EDS personnel and Jivasoft customers will be soon able to access all
						the features they need from one place.{" "}
					</p>
				</div>
			</div>

			<div className="Card">
				<div className="Card-figure">
					<div>
						<FaHardHat style={{ height: "30px", width: "30px" }} />
					</div>
				</div>
				<div className="Card-info">
					<h3>Under Construction</h3>
					<p>
						XD2 is officially under construction. Users can expect to see more
						features and capabilites in future updates.
					</p>
				</div>
			</div>
			<div className="Card">
				<div className="Card-figure">
					<div>
						<FaClipboardCheck style={{ height: "30px", width: "30px" }} />
					</div>
				</div>
				<div className="Card-info">
					<h3>Getting Started</h3>
					<p>
						To access your applications, just click or tap an icon in the left
						menu. From there, you can access your essential workflows.
					</p>
				</div>
			</div>
			<div className="Card">
				<div className="Card-figure">
					<div>
						<FaArrowRight style={{ height: "30px", width: "30px" }} />
					</div>
				</div>
				<div className="Card-info">
					<h3>What's Next</h3>
					<p>
						Stay tuned for features like Universal Help, Worflow History, and bug fixes.
					</p>
				</div>
			</div>
		</DashboardCardsStyled>
	);
};
