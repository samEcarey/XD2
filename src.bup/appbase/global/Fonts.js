import { createGlobalStyle  }  from 'styled-components'
import { 
	SECONDARY_COLOR, GLOBAL_REM_FONT_SIZE, GLOBAL_FONT_FAMILY,
	GLOBAL_FONT_SIZE, GLOBAL_FONT_WEIGHT, 
	GLOBAL_LETTER_SPACING, GLOBAL_LINE_HEIGHT } from '../../appdata'

export const Fonts = createGlobalStyle`
	html { font-size: ${GLOBAL_REM_FONT_SIZE}; }

	body {
		color: ${SECONDARY_COLOR};
		font-family: ${GLOBAL_FONT_FAMILY};
		font-size: ${GLOBAL_FONT_SIZE};
		font-weight: ${GLOBAL_FONT_WEIGHT};
		letter-spacing: ${GLOBAL_LETTER_SPACING};
		line-height: ${GLOBAL_LINE_HEIGHT};
	}
`