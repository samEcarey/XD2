import React from "react";
import { TablefullStyled } from "./styles";
import { TablefullStateProvider } from './context';
import { TablefullMain } from "./TablefullMain";
import { IconClose} from "./assets";

export function Tablefull() {

	const overlay = {
		initial: {
			//opacity: 0, height: "0px",
		},
		in: {
			//height: "calc(100vh - 8rem)", opacity: 1,
		},
		out: {
			//opacity: 0, height: "0px",
		},
	};

	return (
		<TablefullStateProvider>
			<TablefullStyled 
				className="Tablefull-overlay"
				variants={overlay}
				initial="initial"
				animate="in"
				exit="out"
			>
				<TablefullMain />
			</TablefullStyled>
		</TablefullStateProvider>
	);
}