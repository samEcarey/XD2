import styled from "styled-components";
import React from "react";

export const StyledReviewManagerMain = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
	background-color: #f8f8f8;
	height: 100vh;
	width: 100vw;
`;

export const StyledReviewManagerColumn = styled.div`
	background-color: lightgrey;
	width: 15%;
	text-align: center;
	height: 95%;
	border-radius: 20px;
`;

export const StyledAgencyTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	background-color: lightgrey;
`;
export const StyledEDSTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	background-color: #002040;
`;
export const StyledOfficerTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	background-color: #6bff8b;
`;
export const StyledHoursTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	color: black;
	height: 5rem;
	background-color: tomato;
`;
export const StyledTotalsContainer = styled.div`
    display: flex;
    width:100%;
	justify-content: center;
	align-items: center;
`;
export const StyledAssignmentModal = styled.div`
	.close_help_modal {
		position: fixed;
		right: 30px;
		color: white;
	}

	.save {
		position: fixed;
		right: 250px;
		backgroundcolor: green;
	}

	.flexible-modal {
		position: fixed;
		z-index: 9;
		overflow-y: scroll;
		border: 1px solid #ccc;
		background: white;
	}
	.flexible-modal-mask {
		position: fixed;
		height: 100%;
		background: rgba(55, 55, 55, 0.6);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`;
