import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { SAVEREVIEWJOBS } from "app/data";
import ReactModal from "react-modal-resizable-draggable";
import { HelpModal } from "app/assets";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPen, FaCarAlt } from "react-icons/fa";
import {
	StyledAgencyTotal,
	StyledEDSTotal,
	StyledOfficerTotal,
	StyledHoursTotal,
	StyledTotalsContainer,
	StyledAssignmentModal
} from "./Styles";

import { useAuth, useAppGlobalState } from "app/data";
import { alignItemsFunc } from "app/layout/components/flex/helpers/Flex.helpers";
const GETJOBS = "http://104.130.246.16:8080/reviewjobs";

export function ReviewManagerMain() {
	const auth = useAuth();

	const [listStates, setListStates] = useState();
	const [state, setState] = useState([]);
	const [userState, dispatch] = useAppGlobalState();
	const [loading, setLoading] = useState();
	const [jobs, setJobs] = useState([]);
	const [changedJobs, setChangedJobs] = useState({ jobs: [] });

	const [currentColumn, setCurrentColumn] = useState();

	const [detail, setDetail] = useState();
	const [editedDetail, setEditedDetail] = useState();
	const [displayedCharge, setDisplayedCharge] = useState();
	const [editMode, setEditMode] = useState();

	const [rate, setRate] = useState();
	const [hours, setHours] = useState();
	const [total, setTotal] = useState();
	const [recipient, setRecipient] = useState();
	const [column, setColumn] = useState();

	useEffect(() => {
		dispatch({ changedJobs: changedJobs });
	}, [changedJobs]);

	const sortJobs = jobs => {
		const unreviewed = [];
		const flagged = [];
		const needReview = [];
		const completed = [];
		if (jobs != "") {
			jobs.map(j => {
				if (!j.flagged && !j.reviewed) {
					//console.log(j.flagged, j.reviewed);
					unreviewed.push(j);
				}
				if (j.flagged && !j.reviewed) {
					flagged.push(j);
				}
				if (j.reviewed == -1) {
					needReview.push(j);
				}
			});
		}

		setListStates([unreviewed, flagged, needReview, completed]);
		return [unreviewed, flagged, needReview, completed];
	};

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	/**
	 * Moves an item from one list to another list.
	 */
	const move = (
		sInd,
		source,
		destination,
		droppableSource,
		droppableDestination
	) => {
		console.log("is in move");
		console.log(userState);
		const sourceClone = Array.from(source);
		const destClone = Array.from(destination);
		const result = {};
		if (droppableDestination.droppableId == 0) {
			if (
				!source[droppableSource.index].flagged == 0 ||
				!source[droppableSource.index].reviewed == 0
			) {
				result[droppableSource.droppableId] = sourceClone;
				result[droppableDestination.droppableId] = destClone;

				return result;
			}
		}
		if (
			!source[droppableSource.index].flagged &&
			droppableDestination.droppableId == 1
		) {
			result[droppableSource.droppableId] = sourceClone;
			result[droppableDestination.droppableId] = destClone;

			return result;
		}

		const [removed] = sourceClone.splice(droppableSource.index, 1);
		destClone.splice(droppableDestination.index, 0, removed);
		const current = changedJobs;
		setColumn(droppableDestination.droppableId);

		const addJob = {
			assignmentid: source[droppableSource.index].assignmentid,
			reviewed: getFlag(droppableDestination.droppableId),
			charges: source[droppableSource.index].charges,
			realstarttime: source[droppableSource.index].realstarttime,
			realendtime: source[droppableSource.index].realendtime
		};

		var filtered = current.jobs.filter(job => {
			return job.assignmentid !== source[droppableSource.index].assignmentid;
		});

		current.jobs = filtered;
		current.jobs.push(addJob);
		setChangedJobs(current);

		result[droppableSource.droppableId] = sourceClone;
		result[droppableDestination.droppableId] = destClone;
		console.log(changedJobs);
		return result;
	};
	const grid = 8;
	const getColumnName = ind => {
		//switch case
		if (ind == 0) return "UNREVIEWED";
		if (ind == 1) return "FLAGGED";
		if (ind == 2) return "NEED REVIEW";
		if (ind == 3) return "READY TO COMPLETE";
	};
	const getFlag = ind => {
		//switch case
		if (ind == 0) return 0;
		if (ind == 1) return 0;
		if (ind == 2) return -1;
		if (ind == 3) return 1;
	};
	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",
		padding: grid * 2,
		overflowX: "auto",
		margin: `0 0 ${grid}px 0`,
		//wordWrap: "break-word",
		display: "flex",
		borderRadius: "10px",
		webkitBoxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",
		mozBoxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",
		boxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",

		// change background colour if dragging
		background: isDragging ? "lightgrey" : "white",

		// styles we need to apply on draggables
		...draggableStyle
	});
	const getListStyle = isDraggingOver => ({
		overflowY: "scroll",
		background: isDraggingOver ? "skyblue" : "#f0f0f0",
		padding: "2%",
		borderRadius: "10px",
		margin: ".5%",
		width: "25%"
	});

	const asyncInitalGetJobs = async () => {
		console.log("getting details");
		const results = await axios
			.put(
				GETJOBS,
				{
					agencyid: `${
						userState.currentAgencyID
							? userState.currentAgencyID
							: "637A9BC5-316D-45A9-9498-936787ED6421"
					}`
				},
				{
					headers: {
						Authorization: `Bearer ${auth.authState}`,
						"Content-Type": "application/json"
					}
				}
			)
			.then(response => {
				setJobs(response.data.payload.jobs);
				//dispatch({changedJobs:{}})
				console.log(response);
				return response.data.payload.jobs;
			})
			.catch(error => {
				console.log(error);
				setJobs([]);

				return error;
			});
	};

	useEffect(() => {
		if (userState.changedJobs == null) {
			setLoading(false);
			asyncInitalGetJobs();
		}
	}, [userState.changedJobs]);

	useEffect(() => {
		setLoading(false);
		asyncInitalGetJobs();
	}, [userState.currentAgencyID]);

	useEffect(() => {
		if (jobs) {
			const sortedJobs = sortJobs(jobs);
			console.log(jobs);
			setLoading(true);
			setState(sortedJobs);
			setChangedJobs({ jobs: [] });
		} else {
		}
	}, [jobs]);

	useEffect(() => {
		if (displayedCharge) {
			setRate(displayedCharge.rate);
			setHours(displayedCharge.hours);
			setTotal(displayedCharge.total);
			setRecipient(displayedCharge.recipient);
		}
	}, [displayedCharge]);

	function onDragEnd(result) {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}
		const sInd = +source.droppableId;
		const dInd = +destination.droppableId;

		if (sInd === dInd) {
			const items = reorder(state[sInd], source.index, destination.index);
			const newState = [...state];
			newState[sInd] = items;
			setState(newState);
		} else {
			const result = move(sInd, state[sInd], state[dInd], source, destination);

			const newState = [...state];
			newState[sInd] = result[sInd];
			newState[dInd] = result[dInd];
			//console.log(dInd);
			setState(newState);
		}
	}
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);

		if (editMode) {
			toggleEditMode();
		}
		setDisplayedCharge();
	};
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};
	const closeDisplayed = () => {
		setDisplayedCharge();
	};

	const saveChanges = () => {
		if (displayedCharge) {
			displayedCharge.rate = rate;
			displayedCharge.hours = hours;
			displayedCharge.total = total;
			displayedCharge.recipient = recipient;
			if (editMode) {
				toggleEditMode();
			}

			const current = changedJobs;
			var filtered = current.jobs.filter(job => {
				return job.assignmentid !== detail.assignmentid;
			});

			const addJob = {
				assignmentid: detail.assignmentid,
				reviewed: getFlag(column),
				charges: detail.charges,
				realstarttime: detail.actualstarttime,
				realendtime: detail.actualendtime
			};

			current.jobs = filtered;

			console.log(detail);
			current.jobs.push(addJob);
			setChangedJobs(current);
			console.log(changedJobs);
		}
	};
	const AssignmentModalMain = ()=>{
		return(<ReactModal
			top={150}
			minWidth={400}
			minHeight={400}
			initWidth={500}
			initHeight={400}
			onRequestClose={closeModal}
			onRequestClose={closeModal}
			isOpen={isOpen}
		>
			<h3>
				<b>{detail.detailname.toUpperCase()} </b>
				<FaPen onClick={toggleEditMode} />
			</h3>
			<p>{detail.customername.toUpperCase()}</p>
			{editMode ? (
				<>
					<input value={detail.actualstarttime} />
					<input value={detail.actualendtime} />
				</>
			) : (
				<>
					<p>{detail.actuallstarttime}</p>{" "}
					<p>{new Date(detail.actualstarttime).toString()}</p>
				</>
			)}

			<hr />
			<b>OFFICER INFO</b>
			<p>Officer {detail.officersortname}</p>
			{detail.usedcruiser === 1 ? (
				<>
					<FaCarAlt /> USED CRUISER
				</>
			) : (
				<p>NO CRUISER</p>
			)}
			<br />
			<hr />
			{displayedCharge ? (
				<>
					<b>
						<b onClick={closeDisplayed}>CHARGES</b>&gt;
						{displayedCharge.description.toUpperCase()}
					</b>
					<FaPen onClick={toggleEditMode} />
				</>
			) : (
				<b>CHARGES</b>
			)}
			{displayedCharge ? (
				<div>
					{editMode ? (
						<>
							<b>Rate:</b>
							<div>
								<input
									type="number"
									onChange={event =>
										setRate(parseFloat(event.target.value))
									}
									value={rate}
								/>
							</div>
							<b>Hours:</b>
							<div>
								<input
									type="number"
									onChange={event =>
										setHours(parseFloat(event.target.value))
									}
									value={hours}
								/>
							</div>
							<b>Total:</b>
							<div>
								<input
									type="number"
									onChange={event =>
										setTotal(parseFloat(event.target.value))
									}
									value={total}
								/>
							</div>
							<b>Recipient:</b>
							<div>
								<input
									type="text"
									onChange={event => setRecipient(event.target.value)}
									value={recipient}
								/>
							</div>
						</>
					) : (
						<>
							<b>Rate:</b>
							<div>{displayedCharge.rate}</div>
							<b>Hours:</b>
							<div>{displayedCharge.hours}</div>
							<b>Total:</b>
							<div>{displayedCharge.total}</div>
							<b>Recipient:</b>
							<div>{displayedCharge.recipient}</div>
						</>
					)}
				</div>
			) : (
				<div>
					<b></b>
					{detail.charges.map(charge => {
						return (
							<ul>
								<Link
									onClick={() => {
										setDisplayedCharge(charge);
									}}
								>
									{charge.description}
								</Link>
							</ul>
						);
					})}
				</div>
			)}
			<br />

			<br />
			<button
				style={{
					position: "fixed",
					right: "250px",
					backgroundColor: "green",
					color: "white"
				}}
				onClick={saveChanges}
			>
				Save Changes
			</button>
			<button className="close_help_modal" onClick={closeModal}>
				Close Assignment
			</button>
		</ReactModal>)
	}
	const AssignmentItem = ({ item }) => {
		return (
			<div
				onClick={() => {
					setDetail(item);
					openModal();
				}}
				style={{
					height: "100%",
					justifyContent: "space-around"
				}}
			>
				<div style={{ fontSize: "13px" }}>
					{new Date(item.scheduledstarttime).toLocaleDateString()}{" "}
					{new Date(item.actualstarttime).toLocaleTimeString("en-US", {
						hour12: false
					})}
					-{" "}
					{new Date(item.actualendtime).toLocaleTimeString("en-US", {
						hour12: false
					})}
				</div>

				<hr></hr>

				<b>{item.customername.toUpperCase()}</b>
				<p>{item.detailname.toUpperCase()}</p>
				
				<StyledTotalsContainer>
					<StyledAgencyTotal>
						<b>{item.agencytotal}</b>
					</StyledAgencyTotal>

					<StyledEDSTotal>
						<b>{item.edstotal}</b>
					</StyledEDSTotal>

					<StyledOfficerTotal>
						<b>{item.officertotal}</b>
					</StyledOfficerTotal>

					<StyledHoursTotal>
						<b>{item.hourstotal}</b>
					</StyledHoursTotal>
				</StyledTotalsContainer>

				<p>Officer {item.officersortname}</p>{" "}
				<div
					style={{
						flex: "col",
						fontSize: "13px",
						width: "100%"
					}}
				>
					<hr />
					<span
						style={{
							backgroundColor: "lightgrey",
							padding: "10",

							color: "black",
							borderRadius: "20px",
							boxShadow: "10px 0 0px 0px lightgrey, -10px 0 0px 0px lightgrey"
						}}
					>
						{item.detailtypedescription}
					</span>
					<br></br>

					<span
						style={{
							backgroundColor: "lightgrey",
							padding: "10",
							color: "black",
							borderRadius: "20px",
							boxShadow: "10px 0 0px 0px lightgrey, -10px 0 0px 0px lightgrey"
						}}
					>
						{item.officialagencyname}
					</span>
				</div>
			</div>
		);
	};

	return (
		<div>
			{isOpen && (
				<StyledAssignmentModal>
					<AssignmentModalMain/>
				</StyledAssignmentModal>
			)}
			<div
				style={{ display: "flex", justifyContent: "center", height: "100vh" }}
			>
				{loading ? (
					<DragDropContext onDragEnd={onDragEnd}>
						{state.map((el, ind) => (
							<Droppable key={ind} droppableId={`${ind}`}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										style={getListStyle(snapshot.isDraggingOver)}
										{...provided.droppableProps}
									>
										<div
											style={{
												webkitBoxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",
												mozBoxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",
												boxShadow: "0px 5px 15px -10px rgba(0,0,0,0.68)",
												borderRadius: "20px",
												textAlign: "center",
												backgroundColor: "#002040",
												width: "100%",
												position: "sticky",
												top: "20px"
											}}
										>
											<b style={{ color: "white" }}>{getColumnName(ind)}</b>
										</div>
										<br />
										<br />
										{el.map((item, index) => (
											<Draggable
												key={item.assignmentid}
												draggableId={item.assignmentid}
												index={index}
											>
												{(provided, snapshot) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														style={getItemStyle(
															snapshot.isDragging,
															provided.draggableProps.style
														)}
													>
														<AssignmentItem item={item} />
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						))}
					</DragDropContext>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
}


export default ReviewManagerMain;
