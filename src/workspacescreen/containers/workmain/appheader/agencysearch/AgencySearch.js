import React from "react";
import { AgencySearchNavStyled } from "./styles";
import { Flex } from "../../../../../appdesign";
import { HoverSearchIcon } from "./components";

export function AgencySearch() {
	return (
		<AgencySearchNavStyled className="Appheader-agencysearch">
			<form>
				<Flex.RowCenter as="div" className="Form-group">
					<HoverSearchIcon />
					<input type="text" placeholder="Agency Search" />
				</Flex.RowCenter>
			</form>
		</AgencySearchNavStyled>
	);
}
