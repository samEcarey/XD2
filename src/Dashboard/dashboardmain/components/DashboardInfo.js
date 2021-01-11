import React from "react";
import { FaStar } from "react-icons/fa";
import { DashboardInfoStyled } from "../styles";

export const DashboardInfo = ({SetCurrentStep, currentStep}) => {
	var date = new Date(Date.now())
	return (
		<DashboardInfoStyled className="Dashboard-info">
			<div className="Dashboard-info-details">
				{/* <span className="info-icon"><FaStar /></span> */}
				<div className="info-details">
				<span><h1><b>XTRA DUTY 2.0</b></h1>{date.toDateString()}</span>
					<p></p>
				</div>  
			</div>
		</DashboardInfoStyled>
	);
};
