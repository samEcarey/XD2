import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPolicemanShield, IconFiremanShield } from "../assets"
import { AgencySearchResultsStyled } from "../styles";
import { Agencies } from "../constants/AgencyData"

export const AgencySearchResults = (props) => {

	const [agencyType, setAgencyType] = useState('all')

	const { isAgencyOverlay } = props
	
	var agencytypeArray = Agencies.map(function(agency) { return agency.type })
	agencytypeArray = Array.from(new Set(agencytypeArray))

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


	let searchString = props.agencySearchString.trim().toLowerCase()
	// Filter agencies usng agency type
	const filterAgencies = Agencies.filter(function(i) {
		if(agencyType === 'all') {
			return i.friendlyname.toLowerCase().match( searchString )
		} else {
			if(i.type === agencyType) {
				return i.friendlyname.toLowerCase().match( searchString )
			}
		}
		return null
	})

	return (
		<AgencySearchResultsStyled className="Agency-search-results">
			<form className="search-form">
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
				{filterAgencies.map((i) =>(
					<motion.li
						variants={variants}
						initial="hidden"
						animate={isAgencyOverlay ? "visible" : "hidden"}
						transition={{
							damping: 20
						}}
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
				))}
			</ul>
		</AgencySearchResultsStyled>
	);
};

