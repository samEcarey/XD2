export const itemPadding = ({ padding }) => {
	if (padding === "pt") {
		return `padding: 1.5rem 0rem 0rem 0rem;`;
	} else if (padding === "pr") {
		return `padding: 0rem 1.5rem 0rem 0rem;`;
	} else if (padding === "pb") {
		return `padding: 0rem 0rem 1.5rem 0rem;`;
	} else if (padding === "pl") {
		return `padding: 0rem 0rem 0rem 1.5rem;`;
	} else if (padding === "p0") {
		return `padding: 0rem 0rem 0rem 0rem;`;
	} else {
		return `padding: 1.5rem 1.5rem 1.5rem 1.5rem;`;
	}
};

export const itemPaddingTop = ({ pt }) => {
	return `
    padding-top: 100px;
  `;
};
