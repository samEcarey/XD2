import React from "react";
import { Flex } from "../../../../appdesign";
import styled from "styled-components";
import { AgencySwtr } from "./agencyswtr";

export function ModuleHeader() {
	return (
		<StyledHeader className="Container-moduleheader">
			<Flex.RowStart className="Module-header">
				<div className="Toggle-leftdrawer">
					<img src="https://placehold.it/60x40?text=Toggle+icon" />
				</div>
				<div className="Toggle-leftdrawer">
					<h1>Module: Dashboard/Workflow Header</h1>
					{/* <AgencySwtr /> */}
				</div>
			</Flex.RowStart>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	margin: 0;
	padding: 0.5rem 1.5rem 0.5rem 1.5rem;
	background-color: #f1f1f1;
	section {
		div.Toggle-leftdrawer {
			img {
				margin-right: 1.5rem;
			}
		}
		div {
			h1 {
				margin: 0;
				padding: 0;
				font-size: 2.4rem;
			}
		}
	}
`;
