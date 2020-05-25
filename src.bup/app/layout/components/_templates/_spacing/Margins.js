import { createGlobalStyle  }  from 'styled-components'

const baseunit = .5

export const Margins = createGlobalStyle`
	.m-1x { margin: ${baseunit * 1}rem; }
	.m-2x { margin: ${baseunit * 2}rem; }
	.m-3x { margin: ${baseunit * 3}rem; }

	.mt-1x { margin-top: ${baseunit * 1}rem; }
	.mt-2x { margin-top: ${baseunit * 2}rem; }
	.mt-3x { margin-top: ${baseunit * 3}rem; }

	.mr-1x { margin-right: ${baseunit * 1}rem; }
	.mr-2x { margin-right: ${baseunit * 2}rem; }
	.mr-3x { margin-right: ${baseunit * 3}rem; }

	.mb-1x { margin-bottom: ${baseunit * 1}rem; }
	.mb-2x { margin-bottom: ${baseunit * 2}rem; }
	.mb-3x { margin-bottom: ${baseunit * 3}rem; }

	.ml-1x { margin-left: ${baseunit * 1}rem; }
	.ml-2x { margin-left: ${baseunit * 2}rem; }
	.ml-3x { margin-left: ${baseunit * 3}rem; }

	.my-1x { margin-top: ${baseunit * 1}rem; margin-bottom: ${baseunit * 1}rem; }
	.my-2x { margin-top: ${baseunit * 2}rem; margin-bottom: ${baseunit * 2}rem; }
	.my-3x { margin-top: ${baseunit * 3}rem; margin-bottom: ${baseunit * 3}rem; }

	.mx-1x { margin-right: ${baseunit * 1}px; margin-left: ${baseunit * 1}px; }
	.mx-2x { margin-right: ${baseunit * 2}px; margin-left: ${baseunit * 2}px; }
	.mx-3x { margin-right: ${baseunit * 3}px; margin-left: ${baseunit * 3}px; }

	/*** Padding ***/
	/* Needs !important because it is definaed in base style */
	.p-1x { padding: ${baseunit * 1}px !important; }
	.p-2x { padding: ${baseunit * 2}px !important; }
	.p-3x { padding: ${baseunit * 3}px !important; }

	.pt-1x { padding-top: ${baseunit * 1}px !important; }
	.pt-2x { padding-top: ${baseunit * 2}px !important; }
	.pt-3x { padding-top: ${baseunit * 3}px !important; }

	.pr-1x { padding-right: ${baseunit * 1}px !important; }
	.pr-2x { padding-right: ${baseunit * 2}px !important; }
	.pr-3x { padding-right: ${baseunit * 3}px !important; }

	.pb-1x { padding-bottom: ${baseunit * 1}px !important; }
	.pb-2x { padding-bottom: ${baseunit * 2}px !important; }
	.pb-3x { padding-bottom: ${baseunit * 3}px !important; }

	.pl-1x { padding-left: ${baseunit * 1}px !important; }
	.pl-2x { padding-left: ${baseunit * 2}px !important; }
	.pl-3x { padding-left: ${baseunit * 3}px !important; }

	.py-1x { padding-top: ${baseunit * 1}px !important; padding-bottom: ${baseunit * 1}px !important; }
	.py-2x { padding-top: ${baseunit * 2}px !important; padding-bottom: ${baseunit * 2}px !important; }
	.py-3x { padding-top: ${baseunit * 3}px !important; padding-bottom: ${baseunit * 3}px !important; }

	.px-1x { padding-right: ${baseunit * 1}px !important; padding-left: ${baseunit * 1}px !important; }
	.px-2x { padding-right: ${baseunit * 2}px !important; padding-left: ${baseunit * 2}px !important; }
	.px-3x { padding-right: ${baseunit * 3}px !important; padding-left: ${baseunit * 3}px !important; }
`