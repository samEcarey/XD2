import { createGlobalStyle } from 'styled-components'

export const ThemeGlobal = createGlobalStyle`
	body {
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: nowrap;
		align-items: center;
		align-content: center;
		
		/* background-color:	${props => props.theme.tertiaryColor}; */
	}
`