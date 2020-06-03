import React from "react";
import { SearchAgencyNavStyled } from "./styles";
import { IconSearchLoading } from "./assets";

export const SearchAgencyNav = ({ children }) => {
	return (
		<SearchAgencyNavStyled className="Workaside-searchagencynav">
			{children}
			<ul>
				<li>
					<IconSearchLoading />
				</li>
			</ul>
		</SearchAgencyNavStyled>
	);
};
