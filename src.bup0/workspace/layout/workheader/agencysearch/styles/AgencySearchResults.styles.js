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
			opacity: 0;
			&.fire { background-color: RED; }
			span {
				display: block;
				margin: 0px 0px 0px 0px;
				padding: 20px 20px 20px 20px;
				width: 200px;
				height: 120px;
				text-transform: uppercase;
				font-size: 14px;
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

	form.search-form { 
		.form-group-radio {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			margin-bottom: 20px;
			
			.radio-horizontal {
				display: flex;
				align-items: center;
				margin: 0px 50px 10px 50px;
				label { text-transform: capitalize; margin-bottom: 0px; color: #FFF; cursor: pointer; }
			}

			input[type="radio"] {
				margin: 0px 0px 0px 0px;
				padding: 0;
				-webkit-appearance: none;
				box-sizing: border-box;
				outline: none;
				color: #002040;
				text-transform: uppercase;
				border-width: 1px;
				border-radius: 2px;
				border-color: #a4a4a4;
				-webkit-transition: border-color 0.3s ease 0s;
				transition: border-color 0.3s ease 0s;
				border-style: solid;
				background-color: #a4a4a4;
				background-position: right center;
				background-repeat: no-repeat;
				margin-right: 5px;
				width: 16px;
				height: 16px;
				border-radius: 6px;
				cursor: pointer;
				display: inline-block;
				&:hover {
					background-color: #909090;
					border-color: #909090;
					border-radius: 8px;
				}
				&:checked {
					border-radius: 10px;
					background-color: #002040;
				}
			}
		}
	}
`;
