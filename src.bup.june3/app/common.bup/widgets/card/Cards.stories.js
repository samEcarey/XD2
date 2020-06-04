import React from "react";
import { action } from "@storybook/addon-actions";
import { Container } from "../../layout";
import { Card } from "./Card";

export const Cards = () => (
	<>
		<Container padding={true} margin={true}>
			<Card>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
				praesentium obcaecati neque minima quaerat deserunt consectetur
				repudiandae perferendis cumque.
			</Card>
		</Container>
		<Container padding={true}>
			<Card>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
				praesentium obcaecati neque minima quaerat deserunt consectetur
				repudiandae perferendis cumque.
			</Card>
		</Container>
	</>
);

export default {
	component: Card,
	title: "Elements"
};
