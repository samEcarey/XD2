import React from "react";
import { useAppGlobalState } from "app/data";
import { AgencySearchNavStyled } from "./styles";
import { Flex } from "app/layout";
import { HoverSearchIcon } from "./components";

export function AgencySearch() {
	const [state, dispatch] = useAppGlobalState();
	return (
		<AgencySearchNavStyled className="Workheader-agencysearch">
			<form>
				<Flex.RowCenter as="div" className="Form-group">
					<HoverSearchIcon />
					<input type="text" onFocus={()=>dispatch({isAgencyOverlay: !state.isAgencyOverlay})} placeholder="Agency Search" />
				</Flex.RowCenter>
			</form>
		</AgencySearchNavStyled>
	);
}
