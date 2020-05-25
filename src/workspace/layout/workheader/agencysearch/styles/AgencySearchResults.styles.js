import styled from "styled-components";

export const AgencySearchResultsStyled = styled.div`
	margin-top: 30px;
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
		list-style-type: none;
		li {
			display: grid;
			margin: 15px;
			color: #FFFFFF;
			background-color: #002040;
			&.fire { background-color: RED; }
			span {
				display: block;
				margin: 0px 0px 0px 0px;
				padding: 20px 20px 20px 20px;
				width: 200px;
				height: 120px;
				text-transform: uppercase;
				&:hover {
					cursor: pointer;
					background-color: #012b59;
					box-shadow: inset 0px 4px 8px -3px rgba(17,17,17,.6)
				}
				svg {
					width: 22px;
					margin: 0px auto;
					display: block;
					margin-bottom: 5px;
					fill: #FFFFFF;
				}
			}
		}
	}
`;
