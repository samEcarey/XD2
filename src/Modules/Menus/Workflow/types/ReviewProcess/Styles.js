import styled from "styled-components";
import React from "react";
import { WHITE_COLOR, SUCCESS_SHADE, DANGER_COLOR } from "app/constants";

export const StyledReviewManagerMain = styled.div`
	display: flex;
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
	width: 7rem;
	height: 7rem;
	background-color: lightgrey;
`;

export const StyledLabel = styled.div`
	font-size: 13px;
	display: none;
`;
export const StyledReviewIcon = styled.div`
	&:hover {
		backgroundcolor: lightgrey;
	}
`;

export const StyledEDSTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7rem;
	height: 7rem;
	background-color: #002040;
`;
export const StyledOfficerTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7rem;
	height: 7rem;
	background-color: #6bff8b;
`;
export const StyledHoursTotal = styled.div`
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7rem;
	color: black;
	height: 7rem;
	background-color: tomato;
`;
export const StyledTotalsContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	-webkit-scrollbar {
		display: none;
	}
	width: 100%;
	justify-content: center;
	

	&:hover ${StyledLabel} {
		display: inline;
	}
`;
export const StyledTotalsContainerModal = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	&:hover ${StyledLabel} {
		display: inline;
	}
`;
export const StyledAssignmentModal = styled.div`
.button {
	margin:100px;
	color: black;
	background: transparent;
	width: 10rem;
	height: 3.6rem;
	font-size: 1.2rem;
	font-weight: bold;
	border: 1px solid;
	border-radius: 2rem;
	margin: 0rem 1rem;
	cursor: pointer;
	&.save { 
		border-color: ${SUCCESS_SHADE}; 
		&:hover {
		 background-color: ${SUCCESS_SHADE};   
		}
	}
	&.cancel { 
		border-color: ${DANGER_COLOR};
		&:hover {
		 background-color: ${DANGER_COLOR};   
		} 
	 }
}
	.flexible-modal {
		position: fixed;
		z-index: 9;
		overflow-y: auto;
		border: 1px solid #ccc;
		background: white;
	}
	.flexible-modal-mask {
		position: fixed;
		height: 100%;
		background-color:rgba(0, 24, 64, 0.75);
		webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`;

export const StyledSelectedAssignment = styled.div`
	&:hover {
		background-color: #f0f0f0;
	}
`;
