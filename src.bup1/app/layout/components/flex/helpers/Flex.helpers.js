/*** Flex-direction
 ** Row
 * row, r
 ** Column
 * column, col, c
 ** Row-Reverse
 * rowreverse, rowrev, rowrv, rowr
 * row-reverse, row-rev, row-rv, row-r
 * rreverse, rrev, rrv, rr
 * r-reverse, r-rev, r-rv, r-r
 ** Column-Reverse
 * columnreverse, columnrev, columnrv, columnr
 * column-reverse, column-rev, column-rv, column-r
 * colreverse, colrev, colrv, colr
 * col-reverse, col-rev, col-rv, col-r
 * creverse, crev, crv, cr
 * c-reverse, c-rev, c-rv, c-r
 */
export const flexDirectionFunc = ({ fd }) => {
	if (fd === "row" || fd === "r") {
		return `flex-direction: row;`;
	} else if (fd === "column" || fd === "col" || fd === "c") {
		return `flex-direction: column;`;
		//*** Row-Reverse
	} else if (
		//** row full word
		fd === "rowreverse" ||
		fd === "rowrev" ||
		fd === "rowrv" ||
		fd === "rowr" ||
		//* with dash
		fd === "row-reverse" ||
		fd === "row-rev" ||
		fd === "row-rv" ||
		fd === "row-r" ||
		//** rw abreviation
		fd === "rwreverse" ||
		fd === "rwrev" ||
		fd === "rwrv" ||
		fd === "rwr" ||
		//* with dash
		fd === "rw-reverse" ||
		fd === "rw-rev" ||
		fd === "rw-rv" ||
		fd === "rw-r" ||
		//** row first initial
		fd === "rreverse" ||
		fd === "rrev" ||
		fd === "rrv" ||
		fd === "rr" ||
		//* with dash
		fd === "r-reverse" ||
		fd === "r-rev" ||
		fd === "r-rv" ||
		fd === "r-r"
	) {
		return `flex-direction: row-reverse;`;
		//*** Column-Reverse
	} else if (
		//** column full word
		fd === "columnreverse" ||
		fd === "columnrev" ||
		fd === "columnrv" ||
		fd === "columnr" ||
		//* with dash
		fd === "column-reverse" ||
		fd === "column-rev" ||
		fd === "column-rv" ||
		fd === "column-r" ||
		//** col abreviation
		fd === "colreverse" ||
		fd === "colrev" ||
		fd === "colrv" ||
		fd === "colr" ||
		//* with dash
		fd === "col-reverse" ||
		fd === "col-rev" ||
		fd === "col-rv" ||
		fd === "col-r" ||
		//** column first initial
		fd === "creverse" ||
		fd === "crev" ||
		fd === "crv" ||
		fd === "cr" ||
		//* with dash
		fd === "c-reverse" ||
		fd === "c-rev" ||
		fd === "c-rv" ||
		fd === "c-r"
	) {
		return `flex-direction: column;`;
		// Default
	} else {
		return `flex-direction: row;`;
	}
};

export const justifyContentFunc = ({ jc }) => {
	if (
		//*** Flex-Start
		//** full word
		jc === "flexstart" ||
		jc === "flexst" ||
		jc === "flexs" ||
		//* with dash
		jc === "flex-start" ||
		jc === "flex-st" ||
		jc === "flex-s" ||
		//** first initial
		jc === "fstart" ||
		jc === "fst" ||
		jc === "fs" ||
		//* with dash
		jc === "f-start" ||
		jc === "f-st" ||
		jc === "f-s" ||
		//* single
		jc === "start" ||
		jc === "st" ||
		jc === "s"
	) {
		return `justify-content: flex-start;`;
	} else if (
		//*** Flex-End
		//** full word
		jc === "flexend" ||
		jc === "flexen" ||
		jc === "flexe" ||
		//* with dash
		jc === "flex-end" ||
		jc === "flex-en" ||
		jc === "flex-e" ||
		//** first initial
		jc === "fend" ||
		jc === "fen" ||
		jc === "fe" ||
		//* with dash
		jc === "f-end" ||
		jc === "f-en" ||
		jc === "f-e" ||
		//* single
		jc === "end" ||
		jc === "en" ||
		jc === "e"
	) {
		return `justify-content: flex-end;`;
	} else if (
		//*** Flex-Center
		//** full word
		jc === "flexcenter" ||
		jc === "flexcen" ||
		jc === "flexce" ||
		jc === "flexc" ||
		//* with dash
		jc === "flex-center" ||
		jc === "flex-cen" ||
		jc === "flex-ce" ||
		jc === "flex-c" ||
		//** first initial
		jc === "fcenter" ||
		jc === "fcen" ||
		jc === "fce" ||
		jc === "fc" ||
		//* with dash
		jc === "f-center" ||
		jc === "f-cen" ||
		jc === "f-ce" ||
		jc === "f-c" ||
		//* single
		jc === "center" ||
		jc === "cen" ||
		jc === "ce" ||
		jc === "c"
	) {
		return `justify-content: center;`;
	} else if (
		//*** Space-Between
		//** full word
		jc === "spacebetween" ||
		jc === "spacebtw" ||
		jc === "spaceb" ||
		//* with dash
		jc === "space-between" ||
		jc === "space-btw" ||
		jc === "space-b" ||
		//** first initial
		jc === "sbetween" ||
		jc === "sbtw" ||
		jc === "sb" ||
		//* with dash
		jc === "s-between" ||
		jc === "s-btw" ||
		jc === "s-b" ||
		//* single
		jc === "between" ||
		jc === "btw" ||
		jc === "b"
	) {
		return `justify-content: space-between;`;
	} else if (
		//*** Space-Around
		//** full word
		jc === "spacearound" ||
		jc === "spaceard" ||
		jc === "spacear" ||
		jc === "spacea" ||
		//* with dash
		jc === "space-around" ||
		jc === "space-ard" ||
		jc === "space-ar" ||
		jc === "space-a" ||
		//** first initial
		jc === "saround" ||
		jc === "sard" ||
		jc === "sar" ||
		jc === "sa" ||
		//* with dash
		jc === "s-around" ||
		jc === "s-ard" ||
		jc === "s-ar" ||
		jc === "s-a" ||
		//* single
		jc === "around" ||
		jc === "ard" ||
		jc === "ar" ||
		jc === "a"
	) {
		return `justify-content: space-around;`;
	} else {
		return `justify-content: flex-start;`;
	}
};

/** TODO: variations */
export const flexWrapFunc = ({ fw }) => {
	if (
		//*** No-Wrap
		//** full word
		fw === "nowrap" ||
		fw === "nowr" ||
		fw === "now" ||
		//* with dash
		fw === "no-wrap" ||
		fw === "no-wr" ||
		fw === "no-w" ||
		//** first initial
		fw === "nwrap" ||
		fw === "nwr" ||
		fw === "nw" ||
		//* with dash
		fw === "n-wrap" ||
		fw === "n-wr" ||
		fw === "n-w" ||
		//* single
		fw === "wrrap" ||
		fw === "wr" ||
		fw === "w"
	) {
		return `flex-wrap: nowrap;`;
	} else if (
		//*** Wrap
		//** full word
		fw === "wrap" ||
		fw === "wr" ||
		fw === "w" ||
		//* with dash
		fw === "w-r" ||
		//** first initial //* single
		fw === "w"
	) {
		return `flex-wrap: wrap;`;
	} else if (
		//*** Wrap-Reverse
		//** full word
		fw === "wrapreverse" ||
		fw === "wraprev" ||
		fw === "wraprv" ||
		fw === "wrapr" ||
		//* with dash
		fw === "wrap-reverse" ||
		fw === "wrap-rev" ||
		fw === "wrap-rv" ||
		fw === "wrap-r" ||
		//** first initial
		fw === "wreverse" ||
		fw === "wrev" ||
		fw === "wrv" ||
		fw === "wr" ||
		//* with dash
		fw === "w-reverse" ||
		fw === "w-rev" ||
		fw === "w-rv" ||
		fw === "w-r" ||
		//* single
		fw === "rev" ||
		fw === "rv" ||
		fw === "r"
	) {
		return `flex-wrap: wrap-reverse;`;
	} else {
		return `flex-wrap: nowrap;`;
	}
};

export const alignItemsFunc = ({ ai }) => {
	if (
		//*** Stretch
		ai === "stretch" ||
		ai === "str" ||
		ai === "st" ||
		ai === "s"
	) {
		return `align-items: stretch;`;
	} else if (
		//*** Flex-Start
		//** full word
		ai === "flexstart" ||
		ai === "flexst" ||
		ai === "flexs" ||
		//* with dash
		ai === "flex-start" ||
		ai === "flex-st" ||
		ai === "flex-s" ||
		//** first initial
		ai === "fstart" ||
		ai === "fst" ||
		ai === "fs" ||
		//* with dash
		ai === "f-start" ||
		ai === "f-st" ||
		ai === "f-s" ||
		//* single
		ai === "start" ||
		ai === "st" ||
		ai === "s"
	) {
		return `align-items: flex-start;`;
	} else if (
		//*** Flex-End
		//** full word
		ai === "flexend" ||
		ai === "flexen" ||
		ai === "flexe" ||
		//* with dash
		ai === "flex-end" ||
		ai === "flex-en" ||
		ai === "flex-e" ||
		//** first initial
		ai === "fend" ||
		ai === "fen" ||
		ai === "fe" ||
		//* with dash
		ai === "f-end" ||
		ai === "f-en" ||
		ai === "f-e" ||
		//* single
		ai === "end" ||
		ai === "en" ||
		ai === "e"
	) {
		return `align-items: flex-end;`;
	} else if (
		//*** Flex-Center
		//** full word
		ai === "flexcenter" ||
		ai === "flexcen" ||
		ai === "flexce" ||
		ai === "flexc" ||
		//* with dash
		ai === "flex-center" ||
		ai === "flex-cen" ||
		ai === "flex-ce" ||
		ai === "flex-c" ||
		//** first initial
		ai === "fcenter" ||
		ai === "fcen" ||
		ai === "fce" ||
		ai === "fc" ||
		//* with dash
		ai === "f-center" ||
		ai === "f-cen" ||
		ai === "f-ce" ||
		ai === "f-c" ||
		//* single
		ai === "center" ||
		ai === "cen" ||
		ai === "ce" ||
		ai === "c"
	) {
		return `align-items: center;`;
	} else if (
		//*** Flex-Baseline
		//** full word
		ai === "baseline" ||
		ai === "base" ||
		ai === "bl" ||
		ai === "b"
	) {
		return `align-items: baseline;`;
	} else {
		return `align-items: stretch;`;
	}
};

export const alignContentFunc = ({ ac }) => {
	if (
		//*** Stretch
		ac === "stretch" ||
		ac === "str" ||
		ac === "st" ||
		ac === "s"
	) {
		return `align-content: stretch;`;
	} else if (
		//*** Flex-Start
		//** full word
		ac === "flexstart" ||
		ac === "flexst" ||
		ac === "flexs" ||
		//* with dash
		ac === "flex-start" ||
		ac === "flex-st" ||
		ac === "flex-s" ||
		//** first initial
		ac === "fstart" ||
		ac === "fst" ||
		ac === "fs" ||
		//* with dash
		ac === "f-start" ||
		ac === "f-st" ||
		ac === "f-s" ||
		//* single
		ac === "start" ||
		ac === "st" ||
		ac === "s"
	) {
		return `align-content: flex-start;`;
	} else if (
		//*** Flex-End
		//** full word
		ac === "flexend" ||
		ac === "flexen" ||
		ac === "flexe" ||
		//* with dash
		ac === "flex-end" ||
		ac === "flex-en" ||
		ac === "flex-e" ||
		//** first initial
		ac === "fend" ||
		ac === "fen" ||
		ac === "fe" ||
		//* with dash
		ac === "f-end" ||
		ac === "f-en" ||
		ac === "f-e" ||
		//* single
		ac === "end" ||
		ac === "en" ||
		ac === "e"
	) {
		return `align-content: flex-end;`;
	} else if (
		//*** Flex-Center
		//** full word
		ac === "flexcenter" ||
		ac === "flexcen" ||
		ac === "flexce" ||
		ac === "flexc" ||
		//* with dash
		ac === "flex-center" ||
		ac === "flex-cen" ||
		ac === "flex-ce" ||
		ac === "flex-c" ||
		//** first initial
		ac === "fcenter" ||
		ac === "fcen" ||
		ac === "fce" ||
		ac === "fc" ||
		//* with dash
		ac === "f-center" ||
		ac === "f-cen" ||
		ac === "f-ce" ||
		ac === "f-c" ||
		//* single
		ac === "center" ||
		ac === "cen" ||
		ac === "ce" ||
		ac === "c"
	) {
		return `align-content: center;`;
	} else if (
		//*** Space-Between
		//** full word
		ac === "spacebetween" ||
		ac === "spacebtw" ||
		ac === "spaceb" ||
		//* with dash
		ac === "space-between" ||
		ac === "space-btw" ||
		ac === "space-b" ||
		//** first initial
		ac === "sbetween" ||
		ac === "sbtw" ||
		ac === "sb" ||
		//* with dash
		ac === "s-between" ||
		ac === "s-btw" ||
		ac === "s-b" ||
		//* single
		ac === "between" ||
		ac === "btw" ||
		ac === "b"
	) {
		return `align-content: space-between;`;
	} else if (
		//*** Space-Around
		//** full word
		ac === "spacearound" ||
		ac === "spaceard" ||
		ac === "spacear" ||
		ac === "spacea" ||
		//* with dash
		ac === "space-around" ||
		ac === "space-ard" ||
		ac === "space-ar" ||
		ac === "space-a" ||
		//** first initial
		ac === "saround" ||
		ac === "sard" ||
		ac === "sar" ||
		ac === "sa" ||
		//* with dash
		ac === "s-around" ||
		ac === "s-ard" ||
		ac === "s-ar" ||
		ac === "s-a" ||
		//* single
		ac === "around" ||
		ac === "ard" ||
		ac === "ar" ||
		ac === "a"
	) {
		return `align-content: space-around;`;
	} else {
		return `align-content: stretch;`;
	}
};

/** Row - ai-center ac-center */
export const flexRowAlignFunc = () => {
	return `
    flex-direction: row;
    align-items: center;
    align-content: center;
  `;
};

/** Column - ai-center ac-center */
export const flexColumnAlignFunc = () => {
	return `
    flex-direction: column;
    align-items: center;
    align-content: center;
  `;
};
