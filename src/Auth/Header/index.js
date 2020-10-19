import React, { useEffect } from "react";
import { StyledAuthHeader } from "../styles/AuthHeaderStyles";
import { AuthHeaderBrandArea } from "./BrandArea";
import { AuthHeaderTagline } from "./Tagline";
import { AuthHeaderValueProposition } from "./ValueProposition";
import { useViewport } from "app/data";
import {BrandCarousel} from "./BrandCarouselDesktop"
import {BrandCarouselMobile} from "./BrandCarouselMobile"

export const AuthHeader = () => {
	const { width, height } = useViewport();
	const [w, h] = [768, 290];

	const MobileComponent = () => <BrandCarouselMobile/>
	const DesktopComponent = () => <StyledAuthHeader><BrandCarousel/></StyledAuthHeader>;

	return width < w ? <MobileComponent /> : <DesktopComponent />;
};
