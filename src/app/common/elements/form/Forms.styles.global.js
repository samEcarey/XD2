import { createGlobalStyle } from "styled-components";
import { PRIMARY_COLOR } from "app/data";

export const FormsStyles = createGlobalStyle`
form {

input[type='email'],
input[type='number'],
input[type='password'],
input[type='search'],
input[type='tel'],
input[type='text'],
input[type='url'],
textarea,
select {
	/* Removes awkward default styles on some inputs for iOS */
	appearance: none;
	background-color: transparent;
	border: .1rem solid ${PRIMARY_COLOR};
	border-radius: .4rem;
	box-shadow: none;
	/* Forced to replace inherit values of the normalize.css */
	box-sizing: inherit; 
	height: 3.8rem;
	/* The .6rem vertically centers text on FF, ignored by Webkit */
	padding: .6rem 1.0rem; 
	width: 100%;

	&:focus {
		border-color: ${PRIMARY_COLOR};
		outline: 0;
	}
}
select {
	background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;
	padding-right: 3.0rem;

	&:focus {
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#9b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>');
	}
}

textarea {
	min-height: 6.5rem;
}

label,
legend {
	display: block;
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: .5rem;
}

fieldset {
	border-width: 0;
	padding: 0;
}

input[type='checkbox'],
input[type='radio'] {
	display: inline;
}

.label-inline {
	display: inline-block;
	font-weight: normal;
	margin-left: .5rem;
}



}
`;
