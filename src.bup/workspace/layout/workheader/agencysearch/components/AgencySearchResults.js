import React from "react";
import { motion } from "framer-motion";
import { AgencySearchResultsStyled } from "../styles";
import { Agencies } from "../constants/AgencyData"

export const AgencySearchResults = (props) => {
	
	return (
		<AgencySearchResultsStyled className="search-results">
			<ul>
			{Agencies.map((agency) => (
				<li className={agency.type} key={agency.id} >
					<span data-agency={agency.name}>
						{agency.friendlyname}
					</span>
				</li>
			))}
			</ul>
		</AgencySearchResultsStyled>
	);
};

