import React from "react";
import { TablefullStyled } from "./styles";
import { TablefullStateProvider } from "./context";
import { TablefullMain } from "./TablefullMain";
import { IconClose } from "./assets";
import { useTableState } from './context';

export function Tablefull() {



	return (
		<TablefullStateProvider>
			<TablefullMain/>
		</TablefullStateProvider>
	);
}
