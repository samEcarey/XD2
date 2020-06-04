import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getTable } from 'appdata/features/tablefull/actions/tableActions'
import { OverlayTablefullStyled } from "./styles";
import { TablefullStateProvider } from './context';
import { TablefullMain } from "./TablefullMain";
import { IconClose} from "./assets";

export function OverlayTablefull({overlayTablefull, SetOverlayTablefull}) {

	const reduxdispatch = useDispatch();
  
	useEffect(() => {
	  reduxdispatch(getTable())
	},[]);


	const overlay = {
		hidden: { opacity: 0, height: "0px" },
		visible: { height: "calc(100vh - 8rem)", opacity: 1}
	};

	return (
		<TablefullStateProvider>
			<OverlayTablefullStyled 
				className="Overlay-tablefull"
				variants={overlay}
				initial={overlayTablefull ? "visible" : "hidden"}
				animate={overlayTablefull ? "visible" : "hidden"}
			>
				<span className="tablefull-close" onClick={() => SetOverlayTablefull(false)}>
					<IconClose />
				</span>
				<TablefullMain />
			</OverlayTablefullStyled>
		</TablefullStateProvider>
	);
}