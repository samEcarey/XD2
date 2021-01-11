import React, {
	useState,
	useEffect,
	useRef,
	createContext,
	useContext
} from "react";
import {
	DragDropContext,
	Droppable,
	Draggable,
	SensorAPI
} from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import axios from "axios";
import * as tweenFunctions from "tween-functions";
import ReviewProcessSpreadSheetModal from "./SpreadSheetModal";
import ReviewProcessModal from "./Modal";

import {
	FaPen,
	FaCarAlt,
	FaExclamationCircle,
	FaFlag,
	FaExclamationTriangle,
	FaCheckCircle,
	FaTrash
} from "react-icons/fa";
import {
	StyledAgencyTotal,
	StyledEDSTotal,
	StyledOfficerTotal,
	StyledHoursTotal,
	StyledTotalsContainer,
	StyledSelectedAssignment,
	StyledLabel
} from "./Styles";
import { useSpreadsheet } from "../../../Workflow/index";

import { useAuth, useAppGlobalState } from "app/data";
const GETJOBS = "http://104.130.246.16:8080/reviewjobs";

const charge = {
	detailchargedetailid: null,
	description: null,
	rate: null,
	hours: null,
	total: null,
	startTime: null,
	endTime: null
};
const edits = {
	detailchargedetailid: null,
	description: null,
	rate: null,
	hours: null,
	total: null,
	startTime: null,
	endTime: null
};

const chargeContext = createContext(charge);
const editContext = createContext(edits);

const dispatchStateContext = createContext(undefined);
const dispatchEditContext = createContext(undefined);

const ChargeContextProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		chargeContext
	);

	const [editState, editDispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		editContext
	);

	return (
		<chargeContext.Provider value={state}>
			<dispatchStateContext.Provider value={dispatch}>
				<editContext.Provider value={editState}>
					<dispatchEditContext.Provider value={editDispatch}>
						{children}
					</dispatchEditContext.Provider>
				</editContext.Provider>
			</dispatchStateContext.Provider>
		</chargeContext.Provider>
	);
};

export const useCharge = () => [
	useContext(chargeContext),
	useContext(dispatchStateContext)
];
export const useEdit = () => [
	useContext(editContext),
	useContext(dispatchEditContext)
];
export function ReviewManagerMain() {
	//global states
	const auth = useAuth();
	const [userState, dispatch] = useAppGlobalState();

	//Review Manager States
	const [state, setState] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState();

	//Review Manager Item States
	const [detail, setDetail] = useState();

	//Edited Items
	const [changedJobs, setChangedJobs] = useState({ jobs: [] });
	const [editedCharges, setEditedCharges] = useState([]);

	//Displayed Charge States
	const [editMode, setEditMode] = useState(false);
	const [displayedCharge, setDisplayedCharge] = useState();

	const [deletedCharges, setDeletedCharges] = useState();
	const [newCharges, setNewCharges] = useState();

	//Columnm index
	const [column, setColumn] = useState();
	//Column Information
	const columns = [
		{
			index: 0,
			name: "UNREVIEWED",
			icon: <FaExclamationCircle style={{ color: "#FF0000" }} />,
			color: "#FF0000",
			reviewedFlag: 0,
			flaggedFlag: 0
		},

		{
			index: 1,
			name: "FLAGGED",
			icon: <FaFlag style={{ color: "#ff7c2b" }} />,
			color: "#ff7c2b",
			reviewedFlag: 0,
			flaggedFlag: 1
		},
		{
			index: 2,
			name: "NEED REVIEW",
			icon: <FaExclamationTriangle style={{ color: "#d9cd29" }} />,
			color: "#d9cd29",
			reviewedFlag: -1,
			flaggedFlag: 0
		},
		{
			index: 3,
			name: "APPROVED",
			icon: <FaCheckCircle style={{ color: "#29d9ac" }} />,
			color: "#29d9ac",
			reviewedFlag: 1,
			flaggedFlag: 0
		}
	];

	//Update Global changedJobs State
	useEffect(() => {
		if (changedJobs.jobs.length) {
			dispatch({ changedJobs: changedJobs });
			//console.log(changedJobs);
		}
	}, [changedJobs.jobs]);

	//Re-Render Review Manager on Submit (on Submit, global changedJobs is set to null)
	useEffect(() => {
		if (userState.changedJobs.jobs == null) {
			setLoading(false);
			asyncInitalGetJobs();
		}
	}, [userState.changedJobs.jobs]);

	//Set 'Loading...' Text when agencyID Changes (when user selects a new agency to Review Manage)
	useEffect(() => {
		setLoading(false);
		asyncInitalGetJobs();
	}, [userState.currentAgencyID]);

	//Sort jobs by column when jobs state is not null
	useEffect(() => {
		if (jobs) {
			const sortedJobs = sortJobs(jobs);
			setLoading(true);
			setState(sortedJobs);
			setChangedJobs({ jobs: [] });
		} else {
			setLoading(true)
		}
	}, [jobs]);

	//set Displayed Charge info, when it is set and changed

	//sort jobs based on flags
	const sortJobs = jobs => {
		const unreviewed = [];
		const flagged = [];
		const needReview = [];
		const completed = [];
		if (jobs !== "") {
			jobs.map(j => {
				if (!j.flagged && !j.reviewed) {
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

		return [unreviewed, flagged, needReview, completed];
	};

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};
	function getEditedCharges(assignmentid) {}
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
		const sourceClone = Array.from(source);
		//console.log(source,destination)
		const destClone = Array.from(destination);
		const result = {};

		//prevent unwanted drag and drops

		const [removed] = sourceClone.splice(droppableSource.index, 1);
		console.log(droppableSource, droppableSource.index)
		destClone.splice(droppableDestination.index, 0, removed);

		const current = changedJobs;
		setColumn(droppableDestination.droppableId);
		//after a successful move, add the assignment to the list of changedJobs
		changedJobs.jobs.map(j => {
			//.log(j.assignmentid);
		});

		const changedindex = changedJobs.jobs.findIndex(
			job => job.assignmentid == source[droppableSource.index].assignmentid
		);
		//	console.log();
		const addJob = {
			assignmentid: source[droppableSource.index].assignmentid,
			reviewed: columns[droppableDestination.droppableId].reviewedFlag,
			flagged: columns[droppableDestination.droppableId].flaggedFlag,
			flaggedreasons: source[droppableSource.index].flaggedreasons,
			charges: changedindex == -1 ? [] : changedJobs.jobs[changedindex].charges,
			actualstarttime: source[droppableSource.index].actualstarttime,
			actualendtime: source[droppableSource.index].actualendtime
		};

		var filtered = current.jobs.filter(job => {
			return job.assignmentid !== source[droppableSource.index].assignmentid;
		});

		current.jobs = filtered;
		current.jobs.push(addJob);
		setChangedJobs(current);

		result[droppableSource.droppableId] = sourceClone;
		console.log(droppableSource.droppableId);
		result[droppableDestination.droppableId] = destClone;
		return result;
	};

	const grid = 8;

	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",
		padding: grid * 2,
		overflowX: "auto",
		margin: `0 0 ${grid}px 0`,
		//wordWrap: "break-word",
		display: "flex",
		width: "100%",
		borderRadius: "5px",
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
		padding: "1%",
		borderRadius: "5px",
		margin: ".5%",
		width: "25%"
	});

	const asyncInitalGetJobs = async () => {
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
				console.log(response.data.payload);
				//dispatch({changedJobs:{}})
				return response.data.payload.jobs;
			})
			.catch(error => {
				setJobs([]);

				return error;
			});
	};

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
			//	console.log(sInd, state[sInd], state[dInd], source, destination);
			const newState = [...state];
			newState[sInd] = result[sInd];
			newState[dInd] = result[dInd];
			setState(newState);
		}
	}

	const startDrag = function start(id, startRef, targetRef) {
		const preDrag = api.tryGetLock(id);
		if (!preDrag) {
			return;
		}
		const startX =
			startRef.current && startRef.current.getBoundingClientRect().x;

		const endX =
			targetRef.current && targetRef.current.getBoundingClientRect().x;
		//console.log(targetRef)
		//console.log(targetRef.current)

		const start = { x: startX, y: 0 };
		const end = { x: endX, y: 0 };
		const drag = preDrag.fluidLift(start);

		const points = [];

		for (let i = 0; i < 10; i++) {
			points.push({
				x: tweenFunctions.easeOutCirc(i, start.x, end.x, 10),
				y: tweenFunctions.easeOutCirc(i, start.y, end.y, 10)
			});
		}
		moveStepByStep(drag, points);
	};

	const [isDropped, setIsDropped] = useState(false);
	const target = useRef(null);
	function moveStepByStep(drag, values) {
		requestAnimationFrame(() => {
			const newPosition = values.shift();
			drag.move(newPosition);

			if (values.length) {
				moveStepByStep(drag, values);
			} else {
				drag.drop();
			}
		});
	}
	let api;
	const useMyCoolSensor = value => {
		api = value;
	};

	const [isOpen, setIsOpen] = useState(false);
	const [spreadsheetOpen, setSpreadsheetOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const openSpreadsheetModal = () => {
		setSpreadsheetOpen(true);
	};

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const [startTime, setStartTime] = useState();

	const AssignmentItem = ({ column, item }) => {
		const actions = columns.filter(action => {
			return action.name != columns[column].name;
		});
		return (
			<div
				style={{
					height: "100%",
					width: "100%"
				}}
			>
				<StyledSelectedAssignment
					onClick={() => {
						setColumn(column);
						setDetail(item);
						openModal();
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
						<div
							style={{
								flex: "row",
								justifyContent: "center",
								textAlign: "center",
								alignItems: "end"
							}}
						>
							<StyledLabel>
								<b>Hours</b>
							</StyledLabel>
							<StyledHoursTotal>
								<b>{item.hourstotal}</b>
							</StyledHoursTotal>
						</div>
						<div
							style={{
								flex: "row",
								justifyContent: "center",
								textAlign: "center",
								alignItems: "end"
							}}
						>
							<StyledLabel>
								<b>Officer Pay</b>
							</StyledLabel>
							<StyledOfficerTotal>
								<b>${item.officertotal}</b>
							</StyledOfficerTotal>
						</div>
						<div
							style={{
								flex: "row",
								justifyContent: "center",
								textAlign: "center",
								alignItems: "center"
							}}
						>
							<StyledLabel>
								<b>Agency</b>
							</StyledLabel>
							<StyledAgencyTotal>
								<b>${item.agencytotal}</b>
							</StyledAgencyTotal>
							<b>
								<FaCarAlt /> ${item.agencycruisertotal}
							</b>
						</div>
						<div
							style={{
								flex: "row",
								justifyContent: "center",
								textAlign: "center",
								alignItems: "end"
							}}
						>
							<StyledLabel>
								<b>EDS</b>
							</StyledLabel>
							<StyledEDSTotal>
								<b>${item.edstotal}</b>
							</StyledEDSTotal>
							<b>
								<FaCarAlt /> ${item.edscruisertotal}
							</b>
						</div>
					</StyledTotalsContainer>
					<p>Officer {item.officersortname}</p> <hr />
					<span
						style={{
							backgroundColor: "lightgrey",
							padding: "10",

							color: "black",
							paddingLeft: "1%",
							paddingRight: "1%",
							borderRadius: "20px"
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
							paddingLeft: "1%",
							paddingRight: "1%",
							borderRadius: "20px"
						}}
					>
						{item.officialagencyname}
					</span>
					<hr />
				</StyledSelectedAssignment>

				<div
					style={{
						display: "flex",
						flexDirection: "col",
						justifyContent: "space-around"
					}}
				>
					{actions.map(action => {
						return (
							<div
								onClick={() => {
									console.log(refObj);
									console.log(refObj[column]);
									console.log(refObj[columns.indexOf(action)]);

									startDrag(
										item.assignmentid,
										refObj[column],
										refObj[columns.indexOf(action)]
									);
									console.log(column, columns.indexOf(action));
								}}
							>
								{action.icon}
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	const colArr = [];
	const refObj = {};

	const [spreadsheetData, setSpreadsheetData] = useState();
	const [spread, dSpread] = useSpreadsheet();
	const [TableData, setTableData] = useState({
		table: {
			fixedHeader: false,
			showFooter: true,
			deleteRow: false,
			insertRow: false,
			isSelection: "", // rows // cells
			selectRow: "", // checkbox //radio
			editableCell: false,
			recordPerPage: 8,
			isUserGearTableSetting: true,
			isCollapseRows: false,
			isContextMenu: false,
			isFreezeColumn: false,
			columns: [],
			rows: []
		}
	});
	const [actions, setActions] = useState();

	const [initialTableData, setInitialTableData] = useState({
		table: {
			fixedHeader: false,
			showFooter: true,
			deleteRow: false,
			insertRow: false,
			isSelection: "", // rows // cells
			selectRow: "", // checkbox //radio
			editableCell: false,
			recordPerPage: 8,
			isUserGearTableSetting: true,
			isCollapseRows: false,
			isContextMenu: false,
			isFreezeColumn: false,
			columns: [],
			rows: []
		}
	});
	const [newState, setNewState] = useState([]);
	useEffect(() => {
		console.log(state);
	}, [state]);

	useEffect(() => {
		if (spreadsheetData) {
			var assignments = [];
			spreadsheetData.map(assignment => {
				assignments.push({
					key: assignment.assignmentid,
					agency: assignment.officialagencyname,
					customer: assignment.customername,
					jobtype: assignment.detailtypedescription,
					officer: assignment.officersortname,
					time: new Date(assignment.actualstarttime).toLocaleTimeString("en-US", {
						hour12: false
					}),endtime:new Date(assignment.actualendtime).toLocaleTimeString("en-US", {
						hour12: false
					}),
					officerpay: assignment.officertotal,
					agencyfees: assignment.agencytotal,
					agencycruiser: assignment.agencycruisertotal,
					edsfees: assignment.edstotal,
					edscruiser: assignment.edscruisertotal,
					actions: (
						<div>
							<Link
								onClick={() => {
									setColumn(actions.ind);

									var item = spreadsheetData.filter(item => {
										return item.assignmentid == assignment.assignmentid;
									});
									setDetail(item[0]);
									openModal();
									setSpreadsheetOpen(false);
								}}
							>
								View
							</Link>
							{actions.actions.map(action => {
								return (
									<div
										onClick={() => {
											var item = spreadsheetData.filter(item => {
												return item.assignmentid == assignment.assignmentid;
											})[0];
											const changedindex = changedJobs.jobs.findIndex(
												job => job.assignmentid == item.assignmentid
											);
											//	console.log();
											const addJob = {
												assignmentid: item.assignmentid,
												reviewed: columns[action.index].reviewedFlag,
												flagged: columns[action.index].flaggedFlag,
												flaggedreasons: item.flaggedreasons,
												charges:
													changedindex == -1
														? []
														: changedJobs.jobs[changedindex].charges,
												actualstarttime: item.actualstarttime,
												actualendtime: item.actualendtime
											};
											const current = changedJobs;
											const sourceClone = Array.from(state[actions.ind]);
											const destClone = Array.from(state[action.index]);

											const [removed] = sourceClone.splice(assignments.indexOf(assignment), 1);
											destClone.splice(action.index, 0, removed);

											var filtered = current.jobs.filter(job => {
												console.log(job);
												return job.assignmentid !== item.assignmentid;
											});
											console.log(filtered);
											current.jobs = filtered;
											current.jobs.push(addJob);
											setChangedJobs(current);

											const result = {};

											result[actions.ind] = sourceClone;
											result[action.index] = destClone;

											console.log(sourceClone, destClone)
											console.log(result)
											const newState =[...state];
											newState[actions.ind] = result[actions.ind];
											//console.log(newState[actions.ind])
											newState[action.index] = result[action.index];
											//console.log(newState)
											setState(newState)
											setSpreadsheetData(
												spreadsheetData.filter(item => {
													return item.assignmentid !== assignment.assignmentid;
												})
											);
											setSpreadsheetOpen(false);
											{
												/*console.log(actions.ind, action.index)
											startDrag(
												item.assignmentid,
												refObj[actions.ind],
												refObj[action.index]
											);*/
											}
										}}
									>
										{action.icon}
									</div>
								);
							})}
						</div>
					)
				});
			});

			setInitialTableData({
				table: {
					fixedHeader: false,
					showFooter: true,
					deleteRow: false,
					insertRow: false,
					isSelection: "", // rows // cells
					selectRow: "", // checkbox //radio
					editableCell: false,
					recordPerPage: 8,
					isUserGearTableSetting: true,
					isCollapseRows: false,
					isContextMenu: false,
					isFreezeColumn: false,
					columns: [
						{
							name: "actions",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							//formatString: "",
							headerText: "Actions",
							//isKey: false,
							hidden: false
							//isCollapse: false,
							//isUserGearColumnSetting: "dropdown" // modal  // dropdown
						},
						{
							name: "agency",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "",
							headerText: "Agency",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "dropdown" // modal  // dropdown
						},
						{
							name: "customer",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "",
							headerText: "Customer",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "dropdown"
						},
						{
							name: "jobtype",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // simple / decimal
							headerText: "Job Type",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "officer",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							//formatString: "decimal", // simple / decimal
							//precision: "4",
							headerText: "Officer",
							/*rangeOptions: [
								{ id: 1, minValue: 18, maxValue: 29 },
								{ id: 2, minValue: 30, maxValue: 39 },
								{ id: 3, minValue: 40, maxValue: 49 },
								{ id: 4, minValue: 50, maxValue: 59 },
								{ id: 4, minValue: 60, maxValue: 100 }
							],*/
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "time",
							dataType: "date",  // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00 
							buttonText: "",
							buttonUrl: "",
							formatString: "MM/DD/YYYY HH:MM:SS", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
							headerText: "Start Time",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						  },
						  {
							name: "endtime",
							dataType: "date",  // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00 
							buttonText: "",
							buttonUrl: "",
							//formatString: "MM/DD/YYYY HH:MM:SS", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
							headerText: "End Time",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						  },
						{
							name: "officerpay",
							dataType: "currency",
							buttonText: "",
							buttonUrl: "",
							formatString: "true", // 1 / true
							headerText: "Officer Pay",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "agencyfees",
							dataType: "currency", // Need to pass datetime as a date(MM/DD/YYYY) ex. 01/12/2020
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", //  M/D/YY  //  MM/DD/YY  // MM/DD/YYYY  //  MMM D, YY // MMMM D, YYYY  // MM-DD // YY-MM-DD // D-MMM-YY // MMM-YY  // D-MMM
							headerText: "Agency Fees",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "agencycruiser",
							dataType: "currency", // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
							headerText: "Agency Cruiser",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "edsfees",
							dataType: "currency", // Need to pass second as a data ex. 3600
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // HH:MM  // HH:MM:SS  // HH:MM AM/PM  // HH:MM:SS AM/PM // H:MM AM/PM  // H:MM  // H:MM:SS
							headerText: "EDS Fees",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "edscruiser",
							dataType: "currency", // Need to pass second as a data ex. 3600
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // HH:MM  // HH:MM:SS  // HH:MM AM/PM  // HH:MM:SS AM/PM // H:MM AM/PM  // H:MM  // H:MM:SS
							headerText: "EDS Cruiser",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						}
					],
					rows: assignments
				}
			});

			setTableData({
				table: {
					fixedHeader: false,
					showFooter: true,
					deleteRow: false,
					insertRow: false,
					isSelection: "", // rows // cells
					selectRow: "", // checkbox //radio
					editableCell: false,
					recordPerPage: 8,
					isUserGearTableSetting: true,
					isCollapseRows: false,
					isContextMenu: false,
					isFreezeColumn: false,
					columns: [
						{
							name: "actions",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							//formatString: "",
							headerText: "Actions",
							//isKey: false,
							hidden: false
							//isCollapse: false,
							//isUserGearColumnSetting: "dropdown" // modal  // dropdown
						},
						{
							name: "agency",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "",
							headerText: "Agency",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "dropdown" // modal  // dropdown
						},
						{
							name: "customer",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "",
							headerText: "Customer",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "dropdown"
						},
						{
							name: "jobtype",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // simple / decimal
							headerText: "Job Type",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "officer",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							//formatString: "decimal", // simple / decimal
							//precision: "4",
							headerText: "Officer",
							/*rangeOptions: [
								{ id: 1, minValue: 18, maxValue: 29 },
								{ id: 2, minValue: 30, maxValue: 39 },
								{ id: 3, minValue: 40, maxValue: 49 },
								{ id: 4, minValue: 50, maxValue: 59 },
								{ id: 4, minValue: 60, maxValue: 100 }
							],*/
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "time",
							dataType: "text",
							buttonText: "",
							buttonUrl: "",
							//formatString: "decimal", // simple / decimal
							//precision: "4",
							headerText: "Time",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "endtime",
							dataType: "date",  // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00 
							buttonText: "",
							buttonUrl: "",
							formatString: "HH:MM:SS", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
							headerText: "End Time",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						  },
						{
							name: "officerpay",
							dataType: "currency",
							buttonText: "",
							buttonUrl: "",
							formatString: "true", // 1 / true
							headerText: "Officer Pay",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "agencyfees",
							dataType: "currency", // Need to pass datetime as a date(MM/DD/YYYY) ex. 01/12/2020
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", //  M/D/YY  //  MM/DD/YY  // MM/DD/YYYY  //  MMM D, YY // MMMM D, YYYY  // MM-DD // YY-MM-DD // D-MMM-YY // MMM-YY  // D-MMM
							headerText: "Agency Fees",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "agencycruiser",
							dataType: "currency", // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
							headerText: "Agency Cruiser",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "edsfees",
							dataType: "currency", // Need to pass second as a data ex. 3600
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // HH:MM  // HH:MM:SS  // HH:MM AM/PM  // HH:MM:SS AM/PM // H:MM AM/PM  // H:MM  // H:MM:SS
							headerText: "EDS Fees",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						},
						{
							name: "edscruiser",
							dataType: "currency", // Need to pass second as a data ex. 3600
							buttonText: "",
							buttonUrl: "",
							formatString: "decimal", // HH:MM  // HH:MM:SS  // HH:MM AM/PM  // HH:MM:SS AM/PM // H:MM AM/PM  // H:MM  // H:MM:SS
							headerText: "EDS Cruiser",
							isKey: true,
							hidden: false,
							isCollapse: false,
							isUserGearColumnSetting: "modal"
						}
					],
					rows: assignments
				}
			});
		}
	}, [spreadsheetData]);

	useEffect(() => {
		dSpread({
			tableData: TableData
		});
		dSpread({
			initialTableData: initialTableData
		});
		dSpread({
			defaultTablefullState: {
				tableData: TableData,
				displayColumns: TableData.table.columns.filter(column => {
					return column.hidden === false;
				}),
				currentPage: 1,
				recordPerPage: TableData.table.recordPerPage,
				columnSort: { column: "", direction: "" },
				dragOver: "",
				dragColumn: "",
				rowHeaderCheckbox: false,
				rowCheckboxFields: TableData.table.rows.map((d, i) => {
					return { checked: false, data: d };
				}),
				rowRadioFields: "",
				editCell: "",
				expandedColumns: [],
				expandedRows: [],
				sortBy: TableData.table.columns.map(() => {
					return { column: "", direction: "asc" };
				}),
				columnGearFilter: {},
				selectedGearColumn: "",
				contextMenu: [
					{ label: "Item 1", callback: true },
					{ label: "Menu item 2" },
					{ label: "Apple" },
					{ label: "This is orange" },
					{ label: "Conetxt menu is fun" },
					{ label: "Cool" }
				],
				contextVisible: false,
				contextX: 0,
				contextY: 0
			}
		});
		if (spreadsheetData) {
			openSpreadsheetModal();
		}
	}, [TableData]);
	state.map((el, ind) => {
		refObj[ind] = React.createRef();
		return colArr.push(
			<Droppable key={ind} droppableId={`${ind}`}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						style={getListStyle(snapshot.isDraggingOver)}
						{...provided.droppableProps}
					>
						<div
							style={{
								display: "flex",
								backgroundColor: "rgba(255, 255, 255, 0.75)",
								webkitBackdropFilter: "blur(10px)",
								backdropFilter: "blur(10px)",
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								height: "10%",
								borderRadius: "10px",
								position: "sticky",
								top: "20px"
							}}
							onClick={() => {
								setSpreadsheetData(state[ind]);
								const actions = columns.filter(action => {
									return action.name != columns[ind].name;
								});

								setActions({ actions, ind });

							}}
						>
							{columns[ind].icon}
							<b
								style={{
									paddingLeft: "10px",
									color: "black"
								}}
							>
								{columns[ind].name}
							</b>
						</div>
						<br />
						<br />
						<div ref={refObj[ind]}></div>
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
										<AssignmentItem column={ind} item={item} />
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	});

	return (
		<div>
			<ChargeContextProvider>
				{isOpen && (
					<ReviewProcessModal
						isOpen={isOpen}
						spreadsheetData={spreadsheetData}
						openSpreadsheetModal={openSpreadsheetModal}
						setSpreadsheetData={setSpreadsheetData}
						editedCharges={editedCharges}
						setEditedCharges={setEditedCharges}
						setIsOpen={setIsOpen}
						changedJobs={changedJobs}
						setChangedJobs={setChangedJobs}
						columns={columns}
						column={column}
						editMode={editMode}
						detail={detail}
					/>
				)}
				{spreadsheetOpen && (
					<div>
						<ReviewProcessSpreadSheetModal
							isOpen={spreadsheetOpen}
							editedCharges={editedCharges}
							//data={TableData}
							setSpreadsheetData={setSpreadsheetData}
							setSpreadsheetOpen={setSpreadsheetOpen}
						/>
					</div>
				)}
			</ChargeContextProvider>

			<div
				style={{ display: "flex", justifyContent: "center", height: "100vh" }}
			>
				{loading ? (
					<DragDropContext
						sensors={[useMyCoolSensor]}
						onDragEnd={e => {
							//	console.log(e);
							onDragEnd(e);
						}}
					>
						{colArr}
					</DragDropContext>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
}

export default ReviewManagerMain;
