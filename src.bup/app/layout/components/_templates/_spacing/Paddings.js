import { createGlobalStyle  }  from 'styled-components'

const baseunit = .5

export const Paddings = createGlobalStyle`
	/* Needs !important because it is definaed in base style */
	.p-1x { padding: ${baseunit * 1}rem !important; }
	.p-2x { padding: ${baseunit * 2}rem !important; }
	.p-3x { padding: ${baseunit * 3}rem !important; }

	.pt-1x { padding-top: ${baseunit * 1}rem !important; }
	.pt-2x { padding-top: ${baseunit * 2}rem !important; }
	.pt-3x { padding-top: ${baseunit * 3}rem !important; }

	.pr-1x { padding-right: ${baseunit * 1}rem !important; }
	.pr-2x { padding-right: ${baseunit * 2}rem !important; }
	.pr-3x { padding-right: ${baseunit * 3}rem !important; }

	.pb-1x { padding-bottom: ${baseunit * 1}rem !important; }
	.pb-2x { padding-bottom: ${baseunit * 2}rem !important; }
	.pb-3x { padding-bottom: ${baseunit * 3}rem !important; }

	.pl-1x { padding-left: ${baseunit * 1}rem !important; }
	.pl-2x { padding-left: ${baseunit * 2}rem !important; }
	.pl-3x { padding-left: ${baseunit * 3}rem !important; }

	.py-1x { padding-top: ${baseunit * 1}rem !important; padding-bottom: ${baseunit * 1}rem !important; }
	.py-2x { padding-top: ${baseunit * 2}rem !important; padding-bottom: ${baseunit * 2}rem !important; }
	.py-3x { padding-top: ${baseunit * 3}rem !important; padding-bottom: ${baseunit * 3}rem !important; }

	.px-1x { padding-right: ${baseunit * 1}rem !important; padding-left: ${baseunit * 1}rem !important; }
	.px-2x { padding-right: ${baseunit * 2}rem !important; padding-left: ${baseunit * 2}rem !important; }
	.px-3x { padding-right: ${baseunit * 3}rem !important; padding-left: ${baseunit * 3}rem !important; }
`