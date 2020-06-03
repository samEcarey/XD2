import React, { useEffect, useRef, useState} from "react";
import { motion, AnimatePresence, usePresence  } from "framer-motion";
import { IconPolicemanShield, IconFiremanShield } from "../assets"
import { AgencySearchResultsStyled } from "../styles";
import { Agencies } from "../constants/AgencyData";

export const AgencySearchResults = (props) => {

	const [agencyType, setAgencyType] = useState('all')
	const inputEl = useRef(true)
	const holderEl = useRef(null)
	const caretEl = useRef(null)
	const [agencySearchString, setAgencySearchString] = useState('')
	const [loading, setLoading] = useState(false);

	const { isAgencyOverlay, setIsAgencyOverlay} = props
	
	// set unique agency type array from search listing
	var agencytypeArray = Agencies.map(function(agency) { return agency.type })
	agencytypeArray = Array.from(new Set(agencytypeArray))

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

	// Set Agency Type Filter
	const getAgencyType = (e) => {
		var val = e.target.value
		setAgencyType(val)
		
	}


   // animation variants
	const variants  = {
		hidden: { scale: 0, opacity: 0 },
		visible: { scale: 1, opacity: 1 }
	};

	// Filter agencies using agency type & search string
	let searchString;
	if(props.agencySearchString) {
		 searchString = props.agencySearchString.trim().toLowerCase()
	} else {
		 searchString = agencySearchString.trim().toLowerCase()
	}
	
	const filterAgencies = Agencies.filter(function(i) {
		if(agencyType === 'all') {
			return i.friendlyname.toLowerCase().match( searchString )
		} else {
			if(i.type === agencyType) {
				return i.friendlyname.toLowerCase().match( searchString )
			}
		}
		//return null
	})

	console.log(filterAgencies)

	return (
		<AgencySearchResultsStyled className="Agency-search-results">
			<form className="search-form">
				<div className="form-group-search">
					<div className="caret" tabIndex="1" onClick={focusInput} onFocus={focusInput}>
						<div className="caret-content" >
							<div ref={holderEl} className="caret-place-holder">Search for an Agency</div>
							<span className="input-content">{agencySearchString}</span>
							<span ref={caretEl} className="input-caret"></span>
							<input ref={inputEl} onBlur={blurInput} onFocus={()=>setIsAgencyOverlay(true)} className="hidden-input" type="search" onChange={handleSearchChange} tabIndex="-1"  />
						</div>
					</div>
				</div>
			</form>
			<form className="agency-type-form">
				<div className="form-group-radio">
					<div className="radio-horizontal">
						<input type="radio" id="all" className="form-input" value="all" checked={agencyType === 'all'} onChange={getAgencyType} />
						<label htmlFor="all">All</label>
					</div>
					{agencytypeArray.map(function(option, index) {
						return (
							<div key={index} className="radio-horizontal">
								<input id={"type_" + option} className="form-input" type="radio" value={option} checked={agencyType === `${option}`} onChange={getAgencyType} />
								<label htmlFor={"type_" + option}>{option}</label>
							</div>
						)
					})}
				</div>
			</form>
				
			<ul>
				{filterAgencies.map((i, key) =>(
					<AnimatePresence initial={{scale: 0, opacity: 0}}>
							<motion.li
								variants={variants}
								initial="hidden"
								animate={isAgencyOverlay ? "visible" : "hidden"}
								transition={{ damping: 20, when: "afterChildren" }}
								className={i.type} key={i.id}>
									<span data-agency={i.name}>
										{(() => {
											switch(i.type) {
												case 'police':
													return <IconPolicemanShield/>
												case 'fire':
													return <IconFiremanShield/>
												default:
													return null;
											}
										})()}
										{i.friendlyname}
									</span>
							</motion.li>
					</AnimatePresence>
				))}
			</ul>
		</AgencySearchResultsStyled>
	);
};

