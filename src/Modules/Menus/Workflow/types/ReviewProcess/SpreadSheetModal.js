import React, { useState, useEffect, createContext, useContext } from "react";
import ReactModal from "react-modal-resizable-draggable";
import { StyledAssignmentModal } from "./Styles";
import { FaCarAlt, FaPen } from "react-icons/fa";
import { ReviewProcessCharges } from "./Charges";
import TimePicker from "react-time-picker";
import { useCharge, useEdit } from "./Main";
import { Tablefull } from "./Spreadsheet";
import {useViewport} from 'app/data'

export const ReviewProcessSpreadSheetModal = props => {
	const closeModal = () => {
		props.setSpreadsheetOpen(false);
		props.setSpreadsheetData(null);
	};
	const { width, height } = useViewport();
	const [w, h] = [768, 290];

	

	return (
		<StyledAssignmentModal>
			<ReactModal
				top={50}
				initWidth={width-100}
				initHeight={height}
				disableKeystroke={true}
				onRequestClose={closeModal}
				isOpen={props.isOpen}
			>
				<Tablefull
					overlayTablefull={false}
					SetOverlayTablefull={false}
					data={props.data}
				/>
			</ReactModal>
		</StyledAssignmentModal>
	);
};

export default ReviewProcessSpreadSheetModal;
