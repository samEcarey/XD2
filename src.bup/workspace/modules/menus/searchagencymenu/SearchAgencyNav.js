import React, { useState } from "react";
import { SearchAgencyNavStyled } from "./styles";
import { IconSearchLoading } from "./assets";
import { OverlayAgencySearch } from "../../overlayagencysearch";

export const SearchAgencyNav = ({ children }) => {
	const [isAgencyOverlay, setIsAgencyOverlay] = useState(false)
	return (
		<>
		<SearchAgencyNavStyled className="Workaside-searchagencynav">
			{children}
			<ul>
				<li onClick={()=>setIsAgencyOverlay(true)}>
					<IconSearchLoading />
				</li>
			</ul>
		</SearchAgencyNavStyled>

		{/* Overlay agency search include with state */}
		<OverlayAgencySearch isAgencyOverlay={isAgencyOverlay} setIsAgencyOverlay={setIsAgencyOverlay} />
		</>
	);
};
