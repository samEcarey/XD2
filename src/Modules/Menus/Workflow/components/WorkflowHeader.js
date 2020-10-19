import React, { useState } from "react";
import axios from 'axios'
import { IconClose } from "../assets";
import { WorkflowHeaderStyled } from "../styles";
import { useAppGlobalState, useAuth } from "app/data";
import {SAVEREVIEWJOBS} from 'app/data'

export function WorkflowHeader({ SetOverlayWorkflow, SetOverlayMenugroup }) {
	const [state, dispatch] = useAppGlobalState();
	const auth = useAuth();

	const handleOverlayClose = () => {
		SetOverlayWorkflow(false);
		SetOverlayMenugroup(false);
	};

	async function saveJobUpdates() {
		console.log(state.changedJobs)

		const results = await axios
			.put(
				SAVEREVIEWJOBS,state.changedJobs,
				{
					headers: {
						Authorization: `Bearer ${auth.authState}`,
						"Content-Type": "application/json"
					}
				}
			)
			.then(response => {
			
				console.log(response);
				dispatch({changedJobs:null})
				return response.data.payload.jobs;
			})
			.catch(error => {
				console.log(error);
				return error;
			});

			
	}
	return (
		<WorkflowHeaderStyled className="Workflow-header">
			<div className="Workflow-header-brand">
				{/* <span className="info-icon"><FaStar /></span>
				<div className="info-details">
					<h2>Customer Service</h2>
				</div> */}
			</div>
			<div className="Workflow-header-actions">
				<div className="button-group-action">
					<button
						className="button cancel"
						onClick={() => SetOverlayWorkflow(false)}
						
					>
						Cancel
					</button>
					<button
						onClick={() => {
							saveJobUpdates();
						}}
						className="button save"
					>
						Save
					</button>
				</div>
				<span
					className="workflow-close"
					onClick={() => {
						handleOverlayClose();
						dispatch({ appValue: "" });
					}}
				>
					<IconClose />
				</span>
			</div>
		</WorkflowHeaderStyled>
	);
}
