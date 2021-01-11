import React, { useState, useEffect, createContext, useContext } from "react";
import ReactModal from "react-modal-resizable-draggable";
import { StyledAssignmentModal } from "./Styles";
import { FaCarAlt, FaPen } from "react-icons/fa";
import { ReviewProcessCharges } from "./Charges";
import TimePicker from "react-time-picker";
import { useCharge, useEdit } from "./Main";
import { useCurrentWidth } from "react-socks";
import { ViewPortProvider } from "app/data";
import { v4 as uuidv4 } from "uuid";

export const ReviewProcessModal = props => {
	const [detail, setDetail] = useState(props.detail);

	const [deletedIds, setDeletedIds] = useState([]);
	const [deleted, setDeleted] = useState();

	const [displayCreateNew, setDisplayCreateNew] = useState(false);

	const [state, dispatch] = useCharge();
	const [editState, editDispatch] = useEdit();
	const [changeflag, setChangeflag] = useState();
	const [chargeModified, setChargeModified] = useState();

	useEffect(() => {
		console.log(detail.charges);
	}, [detail.charges]);

	const UpdateChargeInformation = () => {
		if (deletedIds.length > 0) {
			saveChargeDeletions();
		}

		//if charge edited or created
		if (
			editState.rate !== state.rate ||
			editState.hours !== state.hours ||
			editState.total !== state.total ||
			editState.description !== state.description
		) {
			//if there's charges
			if (detail.charges) {
				const index = detail.charges.findIndex(
					charge => charge.detailchargedetailid === state.detailchargedetailid
				);
				//if this charge is already in the chargelist
				if (detail.charges[index]) {
					console.log("charge in changelist");
					if (detail.charges[index].changeflag === 1) {
						saveChargeChanges(1);
					} else {
						detail.charges[index].rate = editState.rate;
						detail.charges[index].hours = editState.hours;
						detail.charges[index].total = editState.total;
						detail.charges[index].description = editState.description;
						state.rate = editState.rate;
						state.hours = editState.hours;
						state.total = editState.total;
						state.description = editState.description;

						saveChargeChanges(0);
					}
				} else {
					saveChargeNew();
				}
			} else {
				detail.charges = [];
				saveChargeNew();
			}
		}
		//if detail edited
		if (
			editState.startTime !== state.startTime ||
			editState.endTime !== state.endTime
		) {
			detail.actualstarttime = editState.startTime;
			detail.actualendtime = editState.endTime;
			state.startTime = editState.startTime;
			state.endTime = editState.endTime;
			//setChargeModified(0);
			//setChangeflag(0);
			saveDetailChanges();
		}
	};

	const [startTime, setStartTime] = useState(new Date(detail.actualstarttime));
	const [endTime, setEndTime] = useState(new Date(detail.actualendtime));
	const [startTimeString, setStartTimeString] = useState(
		new Date(detail.actualstarttime).toLocaleTimeString("en-US", {
			hour12: false
		})
	);
	const [endTimeString, setEndTimeString] = useState(
		new Date(detail.actualendtime).toLocaleTimeString("en-US", {
			hour12: false
		})
	);

	const [displayedCharge, setDisplayedCharge] = useState();

	const [isOpen, setIsOpen] = useState(props.isOpen);
	const [editMode, setEditMode] = useState(props.editMode);

	const [columns, setColumns] = useState(props.columns);
	const [column, setColumn] = useState(props.column);

	const [assignmentId, setAssignmentId] = useState();
	const [rate, setRate] = useState();
	const [hours, setHours] = useState();
	const [total, setTotal] = useState();
	const [recipient, setRecipient] = useState();

	useEffect(() => {
		//console.log(detail.actualstarttime);
		dispatch({ startTime: detail.actualstarttime });
		dispatch({ endTime: detail.actualendtime });
		editDispatch({ startTime: detail.actualstarttime });
		editDispatch({ endTime: detail.actualendtime });
	}, []);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const closeModal = () => {
		dispatch({
			possibledescriptions: null,
			detailchargedetailid: null,
			description: null,
			rate: null,
			hours: null,
			total: null,
			recipient: null,
			startTime: null,
			endTime: null
		});
		props.setIsOpen(false);
		if (editMode) {
			toggleEditMode();
		}
		if (props.spreadsheetData) {
			props.openSpreadsheetModal();
			//props.setSpreadsheetData(null);
		}
	};
	useEffect(() => {
		console.log(displayCreateNew);
	}, [displayCreateNew]);
	const saveChargeNew = () => {
		//list of Changed Jobs
		var current = props.changedJobs;

		//list of Changed Jobs without the Current Job
		var filteredChangedJobs = current.jobs.filter(job => {
			return job.assignmentid !== detail.assignmentid;
		});

		//current Changed Job
		var thisJob = props.changedJobs.jobs.filter(job => {
			return job.assignmentid == detail.assignmentid;
		});

		const addCharge = {
			detailchargedetailid: editState.detailchargedetailid,
			rate: editState.rate,
			hours: editState.hours,
			total: editState.total,
			description: editState.description,
			changeflag: 1
		};

		//if the current changed Job exists in the list
		if (thisJob.length > 0) {
			//list of this Job's charges
			var currentCharges = thisJob[0].charges;
			//list of this Job's charges - the current charge if it exists
			var filteredCharges = thisJob[0].charges.filter(charge => {
				return charge.detailchargedetailid !== editState.detailchargedetailid;
			});

			currentCharges = filteredCharges;
			currentCharges.push(addCharge);
			//props.setEditedCharges(currentCharges);

			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				charges: currentCharges,
				actualstarttime: detail.actualstarttime,
				actualendtime: detail.actualendtime
			};
		} else {
			var currentCharges = [];

			currentCharges.push(addCharge);

			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				flaggedreasons: detail.flaggedreasons,
				charges: currentCharges,
				actualstarttime: editState.startTime,
				actualendtime: editState.endTime
			};
		}

		//add the
		current.jobs = filteredChangedJobs;
		current.jobs.push(addJob);
		props.setChangedJobs(current);

		detail.charges.push(addCharge);
		console.log(detail.charges);

		dispatch({
			detailchargedetailid: editState.detailchargedetailid,
			description: editState.description,
			rate: editState.rate,
			hours: editState.hours,
			total: editState.total
		});

		editDispatch({
			detailchargedetailid: editState.detailchargedetailid,
			description: editState.description,
			rate: editState.rate,
			hours: editState.hours,
			total: editState.total
		});
	};

	const saveChargeDeletions = () => {
		if (editMode) {
			toggleEditMode();
		}
		var current = props.changedJobs;

		//list of Changed Jobs without the Current Job
		var filteredChangedJobs = current.jobs.filter(job => {
			return job.assignmentid !== detail.assignmentid;
		});
		//current Changed Job
		var thisJob = props.changedJobs.jobs.filter(job => {
			return job.assignmentid == detail.assignmentid;
		});

		const deletedCharges = [];
		deletedIds.forEach(element => {
			var addCharge = {
				detailchargedetailid: element,
				rate: editState.rate,
				hours: editState.hours,
				total: editState.total,
				description: editState.description,
				changeflag: -1
			};
			deletedCharges.push(addCharge);
		});

		console.log(deletedCharges);
		//if the current changed Job exists in the list
		if (thisJob.length > 0) {
			var currentCharges = thisJob[0].charges;
			console.log(currentCharges);
			var filteredCharges = thisJob[0].charges.filter(charge => {
				return charge.detailchargedetailid !== editState.detailchargedetailid;
			});

			currentCharges = filteredCharges;

			const updatedCharges = currentCharges.concat(deletedCharges);
			console.log(updatedCharges);
			props.setEditedCharges(updatedCharges);

			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				charges: updatedCharges,
				actualstarttime: detail.actualstarttime,
				actualendtime: detail.actualendtime
			};
		} else {
			var currentCharges = [];
			console.log(deletedCharges);
			//currentCharges.concat(deletedCharges);
			console.log(currentCharges);

			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				flaggedreasons: detail.flaggedreasons,
				charges: deletedCharges,
				actualstarttime: editState.startTime,
				actualendtime: editState.endTime
			};

			props.setEditedCharges(deletedCharges);
			//console.log(currentCharges);
		}

		//console.log(addJob);
		current.jobs = filteredChangedJobs;
		current.jobs.push(addJob);
		props.setChangedJobs(current);

		detail.charges = detail.charges.filter(c => {
			return !deletedIds.includes(c.detailchargedetailid);
		});
		//setDisplayCreateNew()
	};

	const saveDetailChanges = () => {
		if (editMode) {
			toggleEditMode();
		}
		var current = props.changedJobs;
		const changedindex = props.changedJobs.jobs.findIndex(
			job => job.assignmentid == detail.assignmentid
		);
		const addJob = {
			assignmentid: detail.assignmentid,
			reviewed: columns[column].reviewedFlag,
			flagged: columns[column].flaggedFlag,
			flaggedreasons: detail.flaggedreasons,
			charges:
				changedindex == -1 ? [] : props.changedJobs.jobs[changedindex].charges,
			actualstarttime: editState.startTime,
			actualendtime: editState.endTime
		};
		//list of Changed Jobs without the Current Job
		var filteredChangedJobs = current.jobs.filter(job => {
			return job.assignmentid !== detail.assignmentid;
		});

		current.jobs = filteredChangedJobs;
		current.jobs.push(addJob);
		props.setChangedJobs(current);
	};

	const saveChargeChanges = flag => {
		if (editMode) {
			toggleEditMode();
		}
		//list of Changed Jobs
		var current = props.changedJobs;

		//list of Changed Jobs without the Current Job
		var filteredChangedJobs = current.jobs.filter(job => {
			return job.assignmentid !== detail.assignmentid;
		});
		//current Changed Job
		var thisJob = props.changedJobs.jobs.filter(job => {
			return job.assignmentid == detail.assignmentid;
		});

		console.log(editState.description);
		const addCharge = {
			detailchargedetailid: editState.detailchargedetailid,
			rate: editState.rate,
			hours: editState.hours,
			total: editState.total,
			description: editState.description,
			changeflag: flag
		};

		//if the current changed Job exists in the list
		if (thisJob.length > 0) {
			var currentCharges = thisJob[0].charges;
			var filteredCharges = thisJob[0].charges.filter(charge => {
				return charge.detailchargedetailid !== editState.detailchargedetailid;
			});

			if (flag === 1) {
				var thisCharge = thisJob[0].charges.filter(charge => {
					return charge.detailchargedetailid === editState.detailchargedetailid;
				});
				console.log(thisCharge[0]);
			}

			currentCharges = filteredCharges;
			currentCharges.push(addCharge);
			props.setEditedCharges(currentCharges);

			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				charges: currentCharges,
				actualstarttime: detail.actualstarttime,
				actualendtime: detail.actualendtime
			};
		} else {
			var currentCharges = [];

			currentCharges.push(addCharge);
			var addJob = {
				assignmentid: detail.assignmentid,
				reviewed: columns[column].reviewedFlag,
				flagged: columns[column].flaggedFlag,
				flaggedreasons: detail.flaggedreasons,
				charges: currentCharges,
				actualstarttime: editState.startTime,
				actualendtime: editState.endTime
			};

			props.setEditedCharges(currentCharges);
		}
		current.jobs = filteredChangedJobs;
		current.jobs.push(addJob);
		props.setChangedJobs(current);
	};

	const handleTime = time => setStartTimeString(time);
	const handleEndTime = time => setEndTimeString(time);
	useEffect(() => {
		var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
			startTimeString
		);
		if (isValid) {
			var t = new Date("Sun, Dec 31 0000 " + startTimeString);
			setStartTime(t);
			//editDispatch({ startTime: t.toISOString() });
		}
		var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
			startTimeString
		);
		if (isValid) {
			var t = new Date("Sun, Dec 31 0000 " + endTimeString);
			setEndTime(t);
			//editDispatch({ startTime: t.toISOString() });
		}

		//console.log(startTime, endTime);
		//editDispatch({ endTime: endTime.toISOString() });
	}, [startTimeString, endTimeString]);

	useEffect(() => {
		editDispatch({ startTime: startTime.toISOString() });
		editDispatch({ endTime: endTime.toISOString() });
	}, [startTime, endTime]);
	return (
		<StyledAssignmentModal>
			<ReactModal
				top={150}
				initWidth={700}
				initHeight={520}
				disableKeystroke={true}
				onRequestClose={closeModal}
				isOpen={isOpen}
			>
				<div style={{ padding: "3%" }}>
					<div>
						{new Date(detail.scheduledstarttime).toLocaleDateString()}
						{editMode ? (
							<div>
								<TimePicker
									format={"HH:mm"}
									onChange={e => {
										handleTime(e);
									}}
									value={startTimeString}
								/>
								<TimePicker
									format={"HH:mm"}
									onChange={e => {
										handleEndTime(e);
										var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
											endTimeString
										);
										if (isValid) {
											var t = new Date("Sun, Dec 31 0000 " + endTimeString);
											setEndTime(t);
											//editDispatch({ endTime: t.toISOString() });
										} else {
											//editDispatch({ endTime: state.endTime });
											setEndTime(state.endTime);
										}
									}}
									value={endTimeString}
								/>{" "}
								<FaPen onClick={toggleEditMode} />
							</div>
						) : (
							<div>
								{startTimeString} - {endTimeString}
								<FaPen onClick={toggleEditMode} />
							</div>
						)}
					</div>
					<h3 style={{ justifyItems: "middle" }}>
						<b>{detail.customername.toUpperCase()} </b>
					</h3>

					<hr />
					<div
						style={{
							display: "flex",
							flexDirection: "col",
							justifyContent: "space-between"
						}}
					>
						<div>{detail.detailname.toUpperCase()}</div>
						<div>Officer {detail.officersortname}</div>
						{detail.usedcruiser === 1 ? (
							<>
								<div>
									<FaCarAlt /> USED CRUISER
								</div>
							</>
						) : (
							<li>NO CRUISER</li>
						)}
					</div>
					<hr />
					{detail.flaggedreasons && (
						<>
							{detail.flaggedreasons.map(reason => {
								//console.log(reason);
							})}
							<hr />
						</>
					)}
					<ReviewProcessCharges
						detail={detail}
						editMode={editMode}
						toggleEditMode={toggleEditMode}
						detail={props.detail}
						charges={detail.charges}
						deletedIds={deletedIds}
						setDeletedIds={setDeletedIds}
						deleted={deleted}
						setDeleted={setDeleted}
						displayedCharge={displayedCharge}
						setDisplayCreateNew={setDisplayCreateNew}
						displayCreateNew={displayCreateNew}
					/>
				</div>
				<div
					style={{
						width: "100%",
						position: "fixed",
						padding: "1%",
						color: "black"
					}}
				>
					<button onClick={closeModal} className="button cancel">
						Cancel
					</button>
					<button onClick={UpdateChargeInformation} className="button save">
						Confirm
					</button>
				</div>
			</ReactModal>
		</StyledAssignmentModal>
	);
};
export default ReviewProcessModal;
