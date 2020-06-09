import React from "react";
import { FaStar } from "react-icons/fa";
import { DashboardInfoStyled } from "../styles";

export const DashboardInfo = ({SetCurrentStep, currentStep}) => {
	return (
		<DashboardInfoStyled className="Dashboard-info">
			<div className="Dashboard-info-details">
				{/* <span className="info-icon"><FaStar /></span> */}
				<div className="info-details">
					<h3>Dashboard Information</h3>
					<span className="datetime">9:00 am | June 1, 2020</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non eum itaque dignissimos cumque.</p>
				</div>
			</div>
		</DashboardInfoStyled>
	);
};
