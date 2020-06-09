import React from "react";
import { useAppGlobalState } from "app/data";
import { LogoExtraDutyStacked, LogoOnDuty } from "../assets";
import { BrandModuleStyled } from "../styles";

export function BrandModule() {
	const [state, dispatch] = useAppGlobalState();
	return (
		<BrandModuleStyled className="Brand-module">
			{(state.appValue === 'ExtraDuty') 
				? <LogoExtraDutyStacked/>
				: <LogoOnDuty/>
			}
			<h3>{state.moduleValue}</h3>
		</BrandModuleStyled>
	);
}
