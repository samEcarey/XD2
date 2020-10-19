import React from "react";
import { IconEdsLogo, IconJivasoftLogo } from "app/assets";
import Carousel from "react-bootstrap/Carousel";

export const BrandCarousel = () => {
	return (
		<Carousel prevIcon={false} nextIcon={false}>
			<Carousel.Item>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ width: "60%", margin: "auto", marginTop: "10%" }}>
						<IconJivasoftLogo />
					</div>
					<div
						style={{
							margin: "20%",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "left",
							fontSize: "1.5rem"
						}}
					>
						<h4>
							<b>PUBLIC SAFETY SCHEDULING SOFTWARE</b>
						</h4>

						<div>
							Streamline your operations, increase accountability and control
							costs in an ever-changing world with Jivasoft software products.
						</div>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ width: "60%", margin: "auto", marginTop: "10%" }}>
						<IconEdsLogo />
					</div>
					<div
						style={{
							margin: "20%",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "left",
							fontSize: "1.5rem"
						}}
					>
						<h4>
							<b>MANAGED SOLUTIONS FOR LAW ENFORCEMENT EXTRA DUTY</b>
						</h4>

						<div>
							We provide agencies solutions that relieve them of administrative
							burden, limits their financial and legal risk, and enhances
							operational efficiency.
						</div>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};
