import React, { useState, useEffect, useRef } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { useCharge, useEdit } from "./Main";
import { Dropdown } from "./dropdown";
export const ReviewProcessDisplayedCharge = props => {
	//localStates
	//const [displayedCharge, setDisplayedCharge] = useState(props.displayedCharge);
	const [state, dispatch] = useCharge();
	const [editState, editDispatch] = useEdit();

	const [rate, setRate] = useState(state.rate);
	const [hours, setHours] = useState(state.hours);
	const [total, setTotal] = useState(state.total);
	const [description, setDescription] = useState(state.description);

	//When Displayed charge is initalized or changed, initialized displayed Items (rate, hours, total, recipient)
	useEffect(() => {
		setRate(state.rate);
		setHours(state.hours);
		setTotal(state.total);
		setDescription(state.description);
	}, [state]);

	//Initalize Edits to Inital Charge State
	useEffect(() => {
		//console.log(state, editState)
		editDispatch({
			rate: state.rate,
			hours: state.hours,
			total: state.total,
			description: state.description
		});
	}, []);

	return (
		<>
			{props.editMode ? (
				<div>
					<FaPen onClick={props.toggleEditMode} />
					<Dropdown
						currentDescription={description}
						descriptions={state.possibledescriptions}
						setDescription={setDescription}
						editDispatch={editDispatch}
					/>{" "}
				</div>
			) : (
				description && (
					<div>
						<b>{description.toUpperCase()}</b>{" "}
						<FaTrash
							onClick={() => {
								if (props.deletedIds.includes(state.detailchargedetailid)) {
									props.setDeletedIds(
										props.deletedIds.filter(d => {
											return d !== state.detailchargedetailid;
										})
									);
									props.setDeleted();
								} else {
									props.setDeleted(state.detailchargedetailid);
								}
							}}
						/>{" "}
						<FaPen onClick={props.toggleEditMode} />
					</div>
				)
			)}

			<div
				style={{
					backgroundColor: "#f0f0f0",
					borderRadius: "25px",
					padding: "5%",
					margin: "1%"
				}}
			>
				{props.editMode ? (
					<>
						<b>Rate:</b>
						<div>
							<input
								type="number"
								onChange={event => {
									setRate(parseFloat(event.target.value));
									editDispatch({ rate: parseFloat(event.target.value) });
								}}
								value={rate}
							/>
						</div>
						<b>Hours:</b>
						<div>
							<input
								type="number"
								onChange={event => {
									setHours(parseFloat(event.target.value));
									editDispatch({ hours: parseFloat(event.target.value) });
								}}
								value={hours}
							/>
						</div>
						<b>Total:</b>
						<div>
							<input
								type="number"
								onChange={event => {
									setTotal(parseFloat(event.target.value));
									editDispatch({ total: parseFloat(event.target.value) });
								}}
								value={total}
							/>
						</div>
					</>
				) : (
					props.displayCharge && (
						<>
							<b>Rate:</b>
							<div>{rate}</div>
							<b>Hours:</b>
							<div>{hours}</div>
							<b>Total:</b>
							<div>{total}</div>
						</>
					)
				)}
			</div>
		</>
	);
};
export default ReviewProcessDisplayedCharge;
