import React from "react";
import { action } from "@storybook/addon-actions";
import { A } from "./A";

export const Anchors = () => (
	<>
		<A href="https://www.yahoo.com" title="Yahoo" target="_blank">
			yahoo comp
		</A>
		<br />
		<a href="">link tag</a>
	</>
);

export default {
	component: A,
	title: "Actions"
};
