import React from "react";
import { IconEdsLogo, IconJivasoftLogo } from "app/assets";
import Carousel from "react-bootstrap/Carousel";

export const BrandCarouselMobile = () => {
	return (
		<Carousel prevIcon={false} nextIcon={false} indicators={false}>
			<Carousel.Item>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ width: "60%", margin: "auto", marginTop: "10%" }}>
						<IconJivasoftLogo />
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ width: "60%", margin: "auto", marginTop: "10%" }}>
						<IconEdsLogo />
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};
