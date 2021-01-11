import React, { useState, useEffect, useRef } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { useCharge, useEdit } from "./Main";
import {Dropdown} from './dropdown'

export const ReviewProcessNewCharge = props => {
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
	}, [state.detailchargedetailid]);

	//Initalize Edits to Inital Charge State
	useEffect(() => {
		if(!props.toggleEditMode){
			props.toggleEditMode()

		}
		editDispatch({
			rate: state.rate,
			hours: state.hours,
			total: state.total,
			description: state.description
		});
	}, []);
	return (
		<>
			<div>
                <b style={{fontSize:"12px"}}> NEW CHARGE</b>
				<Dropdown
					currentDescription={description}
					descriptions={state.possibledescriptions}
					setDescription={setDescription}
					editDispatch={editDispatch}
				/>{" "}
                <div
				style={{
					backgroundColor: "#f0f0f0",
					borderRadius: "25px",
					padding: "5%",
					margin: "1%"
				}}
			>
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
			</div>
            </div>
		</>
	);
};

export default ReviewProcessNewCharge;
