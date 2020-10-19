import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal-resizable-draggable";
import { FaTruckMonster } from "react-icons/fa";

export const DetailReviewModal = (detail) => {
    console.log(detail)
    const [isOpen,setIsOpen] = useState(true)
        const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<HelpModalStyle>
			<ReactModal
				top={150}
				minWidth={400}
				minHeight={400}
				initWidth={500}
				initHeight={400}
				onRequestClose={closeModal}
				onRequestClose={closeModal}
				isOpen={isOpen}
			>
				<b>{detail.detailname.toUpperCase()}</b>
				<br />
                <p>{detail.officersortname.toUpperCase()}</p>
				<div style={{ flex: "row" }}>
					{detail.charges.map(charge => {
						return <div>{charge.description}</div>;
					})}
				</div>
				<br />
				{new Date(realStartTime).toString()}
				<button onClick={closeModal}>Close modal</button>
			</ReactModal>
		</HelpModalStyle>
	);
};
export const HelpModalStyle = styled.div`
	.helpbody {
		padding: 15px;
	}
	.open_help_modal {
		float: right;
	}
	.close_help_modal {
		position: absolute;
		right: 30px;
		bottom: 30px;
	}
	.lock_help_modal {
		position: absolute;
		top: 15px;
		right: 15px;
		z-index: 9;
	}
	.drag-area {
		background: rgba(22, 22, 333, 0.2);
		height: 50px;
		cursor: move;
	}
	.flexible-modal {
		position: fixed;
		z-index: 9;
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
	
	
	.flexible-modal-drag-area-left,
	.flexible-modal-drag-area-bottom,
	.flexible-modal-drag-area-right {
		display: none;
	}
`;
