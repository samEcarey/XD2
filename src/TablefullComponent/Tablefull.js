import React from "react";
import { TablefullStyled } from "./styles";
import { TablefullStateProvider } from './context';
import { TablefullMain } from "./TablefullMain";
import { IconClose} from "./assets";

export function Tablefull(props) {


	return (
		<TablefullStateProvider>
				<TablefullMain />
		</TablefullStateProvider>
	);
}