import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
// import { Button } from '@storybook/react/demo';
import { Button } from "./Button";

export const ButtonPrimary = () => (
	<Button onClick={action("clicked")}>Submit</Button>
);

export const ButtonText2 = () => (
	<Button onClick={action("clicked")}>Text</Button>
);

export default {
	component: Button,
	title: "Actions",
	decorators: [withA11y],
	parameters: {
		backgrounds: [
			{ name: "twitter", value: "#00aced", default: true },
			{ name: "facebook", value: "#3b5998" }
		]
	}
};
