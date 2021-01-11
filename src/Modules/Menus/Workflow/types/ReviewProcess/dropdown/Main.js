import React, { useState, useEffect, createContext, useContext } from "react";
import {
	StyledDropdownBody,
	StyledDropdownMain,
	StyledDropdownItem,
	StyledDropdownHeader
} from "./Styles";

export const Dropdown = props => {

	var descriptionsArray = props.descriptions.split(",");
	return (
		<>
			<StyledDropdownMain>
				<StyledDropdownHeader>
					<b>{props.currentDescription}</b>
				</StyledDropdownHeader>
				<StyledDropdownBody>
					{descriptionsArray.map(d => {
						return (
							<StyledDropdownItem
								onClick={() => {
									console.log(d)
									props.setDescription(d);
									props.editDispatch({ description: d });
								}}
							>
								<ul>{d}</ul>
							</StyledDropdownItem>
						);
					})}
				</StyledDropdownBody>
			</StyledDropdownMain>
		</>
	);
};

export default Dropdown;
