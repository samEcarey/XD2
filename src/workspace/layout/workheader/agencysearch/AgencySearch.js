import React, { useState, useEffect } from "react";
import { AgencySearchNavStyled } from "./styles";
import { Flex } from "app/layout";
import { HoverSearchIcon,OverlayAgencySearch } from "./components";

export function AgencySearch() {
	
	const [isAgencyOverlay, setIsAgencyOverlay] = useState(false)

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
		<AgencySearchNavStyled className={loading ? "Skeleton-Workheader-agencysearch" : "Workheader-agencysearch"}>
			<form>
				<Flex.RowCenter as="div" className="Form-group">
					<HoverSearchIcon />
					<input type="text" onFocus={()=>setIsAgencyOverlay(!isAgencyOverlay)} placeholder="Agency Search" />
				</Flex.RowCenter>
			</form>

			<OverlayAgencySearch isAgencyOverlay={isAgencyOverlay} setIsAgencyOverlay={setIsAgencyOverlay} />
		</AgencySearchNavStyled>
	);
}
