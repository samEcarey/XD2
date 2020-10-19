import React from "react";
import { HeaderActionsStyled } from "./styles";
import { IconChevronLeft, IconChevronRight, IconMore } from "./assets"


export function HeaderNavActions() {
	return (
		<HeaderActionsStyled className="Header-actions">
			<div className="button-group-step">
				<button className="button prev"><IconChevronLeft /> Prev</button>
				<button className="button next">Next <IconChevronRight /></button>
			</div>
			<div className="button-group-action">
				<button className="button cancel">Cancel</button>
				<button className="button save">Save</button>
			</div>
			<div class="icon-more">
				<IconMore />
			</div>
		</HeaderActionsStyled>
	);
}
