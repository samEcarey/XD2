import React, { useState, useEffect, useRef } from "react";
import { AgencySearchNavStyled } from "./styles";
import { Flex } from "app/layout";
import { HoverSearchIcon,OverlayAgencySearch } from "./components";

export function AgencySearch() {
	
	const inputEl = useRef(true)
	const holderEl = useRef(null)
	const caretEl = useRef(null)
	const [isAgencyOverlay, setIsAgencyOverlay] = useState(false)
	const [agencySearchString, setAgencySearchString] = useState('')
	const [loading, setLoading] = useState(false);

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

	return (
		<AgencySearchNavStyled className={loading ? "Skeleton-Workheader-agencysearch" : "Workheader-agencysearch"}>
			<form>
				<Flex.RowCenter as="div" className="Form-group">
					{/* <HoverSearchIcon /> */}
					{/* <input type="text" onFocus={()=>setIsAgencyOverlay(!isAgencyOverlay)} placeholder="Agency Search" /> */}

					<div className="caret" tabIndex="1" onClick={focusInput} onFocus={focusInput}>
						<div className="caret-content" >
							<div ref={holderEl} className="caret-place-holder">Agency Search...</div>
							<span className="input-content">{agencySearchString}</span>
							<span ref={caretEl} className="input-caret"></span>
							<input ref={inputEl} onBlur={blurInput} onFocus={()=>setIsAgencyOverlay(!isAgencyOverlay)} className="hidden-input" type="text" onChange={handleSearchChange} tabIndex="-1"  />
						</div>
					</div>
					
				</Flex.RowCenter>
			</form>

			<OverlayAgencySearch isAgencyOverlay={isAgencyOverlay} setIsAgencyOverlay={setIsAgencyOverlay} agencySearchString={agencySearchString} />
		</AgencySearchNavStyled>
	);
}
