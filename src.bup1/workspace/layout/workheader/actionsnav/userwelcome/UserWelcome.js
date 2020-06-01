import React, { useState } from "react";
import { Flex } from "app/layout";
import { Drawer, FigureEdsHat } from "./components";
import { IconMoreVertical } from "./assets";
import { UserWelcomeStyled } from "./styles";

export function UserWelcome({ children }) {
	

	return (
		<UserWelcomeStyled class="User-welcome">
			<div class="User-text"><small>Welcome</small><span><a href="/">Dan Ryan</a></span></div>
			<div class="User-more"><IconMoreVertical /></div>
			<figure class="User-profile"></figure>
		</UserWelcomeStyled>
	);
}
