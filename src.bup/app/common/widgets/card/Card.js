import React from "react";
import {
	CardContainer,
	Body,
	Title,
	Text,
	Image,
	Button
} from "./Cards.styles";
import classNames from "classnames";

export function Card({ classes, children, ...restProps }) {
	// classes
	return (
		<CardContainer className={classNames("card", classes)} {...restProps}>
			{children}
		</CardContainer>
	);
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
	// classes
	return (
		<Body className={classNames("card-body", classes)} {...restProps}>
			{children}
		</Body>
	);
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
	// classes
	return (
		<Title className={classNames("card-title", classes)} {...restProps}>
			{children}
		</Title>
	);
};

Card.Text = function CardText({ classes, children, ...restProps }) {
	// classes
	return (
		<Text className={classNames("card-text", classes)} {...restProps}>
			{children}
		</Text>
	);
};

Card.Image = function CardImage({ classes, src, alt, ...restProps }) {
	return (
		<Image
			src={src}
			alt={alt}
			className={classNames("card-image", classes)}
			{...restProps}
		/>
	);
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
	return (
		<Button
			type="button"
			className={classNames("card-button", classes)}
			{...restProps}
		>
			{children}
		</Button>
	);
};
