import React, { useState } from "react";
import { SearchAgencyNavStyled } from "./styles";
import { IconSearchLoading } from "./assets";
import { IconEdsHat } from "app/assets"
import { AgencySearch } from "../../agencysearch";

export const SearchAgencyNav = ({ children }) => {
	const [isAgencyOverlay, setIsAgencyOverlay] = useState(false)
	return (
		<>
		<SearchAgencyNavStyled className="Workaside-searchagencynav">
			{children}
			<ul>
				<li className="brand-icon">
					<IconEdsHat />
				</li>
				<li onClick={()=>setIsAgencyOverlay(true)}>
					<IconSearchLoading />
				</li>
			</ul>
		</SearchAgencyNavStyled>

		{/* Overlay agency search include with state */}
		<AgencySearch isAgencyOverlay={isAgencyOverlay} setIsAgencyOverlay={setIsAgencyOverlay} />
		</>
	);
};
