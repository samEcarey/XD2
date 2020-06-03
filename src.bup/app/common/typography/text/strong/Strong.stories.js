import React from "react";
import { action } from "@storybook/addon-actions";
import { P } from "../paragraph";
import { Strong } from "./Strong";

export const StrongBasic = () => (
	<P>
		Lorem ipsum <Strong>dolor sit amet</Strong> consectetur adipisicing elit.
		Velit quas commodi iure. Molestiae, quas. Officiis qui veritatis veniam
		cumque nesciunt.
	</P>
);

export default {
	component: Strong,
	title: "Atoms"
};
