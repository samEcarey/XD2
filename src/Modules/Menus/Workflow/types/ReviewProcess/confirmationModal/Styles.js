import styled from "styled-components";
export const StyledDropdownBody = styled.div`
	width:50%;
	height:50%;
`;

export const StyledDropdownItem = styled.div`
	&:hover {
		color: white;
		background-color: grey;
	}
`;
export const StyledDropdownHeader = styled.div`
	border-color: grey;
	color: black;
`;

export const StyledDropdownMain = styled.div`
	&:hover ${StyledDropdownBody} {
		overflow-y: scroll;
		display: flex;
		padding: 2%;
		flex-direction: column;
		height: 50%;
		border-radius: 10px;
		position: absolute;
		background-color:lightgrey
	}
`;
