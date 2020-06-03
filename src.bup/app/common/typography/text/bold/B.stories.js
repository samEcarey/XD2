import React from "react";
import { action } from "@storybook/addon-actions";
import { P } from "../paragraph";
import { B } from "./B";

export const BBasic = () => (
	<P>
		Lorem ipsum dolor sit, <B>amet consectetur</B> adipisicing elit.
	</P>
);

export default {
	component: B,
	title: "Atoms"
};
