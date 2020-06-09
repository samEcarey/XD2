import React, { useState, useEffect, useRef } from "react";
import { AgencySearchNavStyled } from "./styles";
import { Flex } from "app/layout";
import { HoverSearchIcon } from "./components";
import { IconPolicemanShield, IconFiremanShield, IconClose } from "./assets";
import { OverlayAgencySearch } from "workspace/modules/overlayagencysearch";

export function AgencySearch() {
	
	const inputEl = useRef(true)
	const holderEl = useRef(null)
	const caretEl = useRef(null)
	const [isAgencyOverlay, setIsAgencyOverlay] = useState(false)
	const [agencySearchString, setAgencySearchString] = useState('')
	const [loading, setLoading] = useState(false);

	const [agencyValue, setAgencyValue] = useState();
	const [agencyValueType, setAgencyValueType] = useState();

	useEffect(() => {
		// set the loading state to true for 3 seconds
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	const focusInput = (e) => {
		inputEl.current.focus()
		caretEl.current.classList.add("bling")
		holderEl.current.classList.add("hide")
	}

	const blurInput = (e) => {
		caretEl.current.classList.remove("bling")
		if (agencySearchString === "") {
			holderEl.current.classList.remove("hide")
		}
	}

	// Search value change
	const handleSearchChange = (e) => {
		setAgencySearchString(e.target.value)		
	}

	// Reset agency 
	const resetAgency = () => {
		setAgencyValue('');
		setAgencyValueType('');
	}

	return (
		<AgencySearchNavStyled className={loading ? "Skeleton-Workheader-agencysearch" : "Workheader-agencysearch"}>
			<form>
				<Flex.RowCenter as="div" className={`Form-group ${agencyValueType === 'police' ? 'agency-police' : agencyValueType === 'fire' ? 'agency-fire' : ''}`}>
					<HoverSearchIcon />

					<div className="caret" tabIndex="1" onClick={focusInput} onFocus={focusInput}>
						<div className="caret-content" >
							<div ref={holderEl} className="caret-place-holder">
								{agencyValue ?
								<>
									{(() => {
										switch(agencyValueType) {
											case 'police':
												return <IconPolicemanShield/>
											case 'fire':
												return <IconFiremanShield/>
											default:
												return null;
										}
									})()}
								  	{agencyValue}
								</>
								: "Search for an Agency"
								}
							</div>
							<span className="input-content">{agencySearchString}</span>
							<span ref={caretEl} className="input-caret"></span>
							<input ref={inputEl} onBlur={blurInput} onFocus={()=>setIsAgencyOverlay(true)} className="hidden-input" type="search" onChange={handleSearchChange} tabIndex="-1"  />
						</div>
					</div>

					<span className="close-agency" onClick={resetAgency}><IconClose /></span>
					
				</Flex.RowCenter>
			</form>
			
			{/* Include overlay agenncy search from modules */}
			<OverlayAgencySearch 
				isAgencyOverlay={isAgencyOverlay} 
				setIsAgencyOverlay={setIsAgencyOverlay} 
				agencySearchString={agencySearchString} 
				setAgencyValue={setAgencyValue} 
				setAgencyValueType={setAgencyValueType}
			/>
		</AgencySearchNavStyled>
	);
}
