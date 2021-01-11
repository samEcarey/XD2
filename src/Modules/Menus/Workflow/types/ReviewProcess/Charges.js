import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHandPointLeft, FaPlus, FaTrash } from "react-icons/fa";

import { ReviewProcessNewCharge } from "./NewCharge";
import { v4 as uuidv4 } from 'uuid';

import { ReviewProcessDisplayedCharge } from "./DisplayedCharge";
import { useCharge, useEdit } from "./Main";

export const ReviewProcessCharges = props => {
	const [state, dispatch] = useCharge();
	const [editState, editDispatch] = useEdit();

	const [displayCharge, setDisplayCharge] = useState();
	const [displayCreateNew, setDisplayCreateNew] = useState();

	useEffect(()=>{
console.log(displayCreateNew)
	},[displayCreateNew])
	
	useEffect(() => {
		if (props.deleted) {
			props.deletedIds.push(props.deleted);
		}
		//console.log(props.deletedIds);
	}, [props.deleted]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "col"
			}}
		>
			<div style={{ width: "45%" }}>
				<b>CHARGES</b>
				<div
					style={{
						borderRadius: "25px",
						padding: "5%",
						margin: "1%"
					}}
				>
					{props.detail.charges ? (
						props.detail.charges.map(charge => {
							return (
								<li>
									<Link
										onClick={() => {
											setDisplayCharge(true);
											setDisplayCreateNew(false)
											dispatch({
												possibledescriptions:
													props.detail.possiblechargedescriptions,
												detailchargedetailid: charge.detailchargedetailid,
												description: charge.description,
												rate: charge.rate,
												hours: charge.hours,
												total: charge.total
											});
											console.log(
												state.rate,
												state.description,
												state.hours,
												state.total
											);

											editDispatch({
												detailchargedetailid: charge.detailchargedetailid,
												description: charge.description,
												rate: charge.rate,
												hours: charge.hours,
												total: charge.total
											});
											//props.setDisplayedCharge(charge);
										}}
									>
										{props.deletedIds.includes(charge.detailchargedetailid) ||
										props.deleted == charge.detailchargedetailid ? (
											<strike style={{ color: "red" }}>
												{charge.description}
											</strike>
										) : (
											charge.description
										)}
									</Link>
								</li>
							);
						})
					) : (
						<div>No Charges for this Assignment.</div>
					)}
				</div>
				<Link
					onClick={() => {
						setDisplayCharge(false);
						setDisplayCreateNew(true);

						dispatch({
							possibledescriptions: props.detail.possiblechargedescriptions,
							detailchargedetailid: uuidv4(),
							description: props.detail.possiblechargedescriptions.split(
								","
							)[0],
							rate: null,
							hours: null,
							total: null
						});
						editDispatch({
							detailchargedetailid: uuidv4(),
							description: props.detail.possiblechargedescriptions.split(
								","
							)[0],
							rate: null,
							hours: null,
							total: null
						});
						;
					}}
				>
					<FaPlus /> Add a New Charge
				</Link>
			</div>

			<div style={{ width: "55%" }}>
				{displayCharge ? (
					<ReviewProcessDisplayedCharge
						displayedCharge={props.displayedCharge}
						editMode={props.editMode}
						toggleEditMode={props.toggleEditMode}
						setDeleted={props.setDeleted}
						setDeletedIds={props.setDeletedIds}
						deletedIds={props.deletedIds}
						displayCharge={displayCharge}

						//updateChargeInformation={props.updateChargeInformation}
					/>
				) : displayCreateNew ? (
					<ReviewProcessNewCharge
					toggleEditMode={props.toggleEditMode}

					></ReviewProcessNewCharge>
				) : (
					<div />
				)}
			</div>
		</div>
	);
};
export default ReviewProcessCharges;
