import React from "react";
import { action } from "@storybook/addon-actions";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { H4 } from "./H4";
import { H5 } from "./H5";
import { H6 } from "./H6";

export const Headings = () => (
	<>
		<H1>H1 Comp</H1>
		<H2>H2 Comp</H2>
		<H3>H3 Comp</H3>
		<H4>H4 Comp</H4>
		<H5>H5 Comp</H5>
		<H6>H6s Comp</H6>
		<hr />
		<h1>H1 Tag</h1>
		<h2>H2 Tag</h2>
		<h3>H3 Tag</h3>
		<h4>H4 Tag</h4>
		<h5>H5 Tag</h5>
		<h6>H6 Tag</h6>
	</>
);

export default {
	component: H1,
	title: "Atoms"
};
