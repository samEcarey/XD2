import React from "react";
import { TablefullStyled } from "./styles";
import { TablefullStateProvider } from './context';
import { TablefullMain } from "./TablefullMain";
import { IconClose} from "./assets";

export function Tablefull({overlayTablefull, SetOverlayTablefull}) {

	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "calc(100vh - 8rem)", opacity: 1}
	};

	return (
		<TablefullStateProvider>
			<TablefullStyled 
				className="Tablefull-overlay"
				variants={overlay}
				initial={overlayTablefull ? "visible" : "hidden"}
				animate={overlayTablefull ? "visible" : "hidden"}
			>
				<span className="tablefull-close" onClick={() => SetOverlayTablefull(false)}>
					<IconClose />
				</span>
				<TablefullMain />
			</TablefullStyled>
		</TablefullStateProvider>
	);
}