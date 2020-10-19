import React from "react";
import { useAppGlobalState } from "app/data";
import { LogoOnDuty } from "../assets";
import {IconXdBadge} from 'app/assets'
import { BrandModuleStyled } from "../styles";

export function BrandModule() {
	const [state, dispatch] = useAppGlobalState();
	return (
		<BrandModuleStyled className="Brand-module">
			{(state.appValue === 'Xtra Duty') 
				? <IconXdBadge/>
				: state.appValue===""?(<></>):(<LogoOnDuty/>)
			}
			<h3>{state.moduleValue}</h3>
		</BrandModuleStyled>
	);
}
