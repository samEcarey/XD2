import React, { useEffect, useState, createContext, useContext } from "react";
import { WorkflowsStyled } from "./styles";
import {
	WorkflowHeader,
	WorkflowInfo,
	WorkflowStepInfo,
	WorkflowStepForm
} from "./components";

import { ReviewManagerMain } from "./types";
import { useAppGlobalState } from "app/data";
const TableData = {
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
		],
		rows: [
			
		]
	}

};
const defaultTablefullState = {
	tableData: TableData,
				displayColumns: TableData.table.columns.filter(column => {return column.hidden === false}),
				currentPage: 1,
				recordPerPage: TableData.table.recordPerPage,
				columnSort: { column: '', direction: '' },
				dragOver: '',
				dragColumn: '',
				rowHeaderCheckbox: false,
				rowCheckboxFields: TableData.table.rows.map((d,i) => { return { checked: false, data:d }}),
				rowRadioFields: '',
				editCell: '',
				expandedColumns: [],
				expandedRows: [],
				sortBy: TableData.table.columns.map(() => { return { column: '', direction:'asc'} } ),
				columnGearFilter: {},
				selectedGearColumn: '',
				contextMenu : [
				  {"label":"Item 1", "callback": true},
				  {"label":"Menu item 2"},
				  {"label":"Apple"},
				  {"label":"This is orange"},
				  {"label":"Conetxt menu is fun"},
				  {"label":"Cool"}],
				contextVisible: false,
				contextX: 0,
				contextY: 0
};
const spreadsheetContext = createContext(defaultTablefullState);
const dispatchSpreadsheetStateContext = createContext(undefined);
export const SpreadsheetContextProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		defaultTablefullState
	);

	return (
		<spreadsheetContext.Provider value={state}>
			<dispatchSpreadsheetStateContext.Provider value={dispatch}>
				{children}
			</dispatchSpreadsheetStateContext.Provider>
		</spreadsheetContext.Provider>
	);
};
export const useSpreadsheet = () => [
	useContext(spreadsheetContext),
	useContext(dispatchSpreadsheetStateContext)
];
export function ModuleMenuGroupWorkflow({
	workflows,
	overlayWorkflow,
	SetOverlayWorkflow,
	SetOverlayMenugroup
}) {
	const [state,dispatch] = useAppGlobalState();
	const [currentStep, SetCurrentStep] = useState(0);
const [renderedWorkflow,setRenderedWorflow]= useState(<div/>)
	const [currentWorflow, setCurrentWorkflow] = useState();

	
	
	useEffect(()=>{
		setCurrentWorkflow(workflows[currentStep])
	},[currentStep])

	useEffect(()=>{
		if(currentWorflow){
			if (
				currentWorflow.workflowid ==
				"A29DCE0A-838D-47D4-AE43-D14BD4AB5C5E"
			) {
				 setRenderedWorflow(<SpreadsheetContextProvider><ReviewManagerMain /></SpreadsheetContextProvider>);
			}
		}
	},[currentWorflow])

	const overlay = {
		hidden: { display: "none" },
		visible: { display: "block" }
	};
	

	const Workflows = () => {
	
		
		return currentWorflow
	};
	
	return (
		<WorkflowsStyled
			className="Workflows-overlay"
			variants={overlay}
			initial={overlayWorkflow ? "visible" : "hidden"}
			animate={overlayWorkflow ? "visible" : "hidden"}
		>
			<div className="Workflows-inner">
				<WorkflowHeader
					SetOverlayWorkflow={SetOverlayWorkflow}
					SetOverlayMenugroup={SetOverlayMenugroup}
				/>
				<WorkflowInfo
					currentWorkflow={state.moduleMenuGroupWorkflows[currentStep]}
					SetCurrentStep={SetCurrentStep}
				/>
				{renderedWorkflow}
				{/**<WorkflowStepForm
					currentStep={currentStep}
					SetCurrentStep={SetCurrentStep}
				/> */}
			</div>
		</WorkflowsStyled>
	);
}
