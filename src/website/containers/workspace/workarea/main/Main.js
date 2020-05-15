import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useGlobalState } from "../../../../../appdata/components/useGlobalStateFunc";
import { Card } from "../../../../../appbase";
import movies from "../../../../../appdata/data";

const variants = {
	open: { marginLeft: 300 },
	closed: { marginLeft: 0 }
};

export function Main() {
	const [state, dispatch] = useGlobalState();
	return (
		<StyledMain
			className="Workarea-main"
			variants={variants}
			initial="closed"
			animate={state.leftPushDrawerOpen ? "open" : "closed"}
			transition={{ damping: 300 }}
		>
			<h2>workarea</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
				neque assumenda et voluptatum maxime provident. Nihil vero harum iste!
				Eaque, minima quidem aliquid iure voluptas deleniti vero laborum sunt
				incidunt tempora fugiat enim nulla dolor voluptates officiis, quo eius
				hic fugit excepturi unde aperiam aspernatur sapiente. Illum recusandae
				quis eveniet.
			</p>
			<section>
				{movies.map(movie => (
					<Card classes="Card-workarea" key={`${movie.id}`}>
						<Card.Image src={movie.image} title={movie.alt}></Card.Image>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
							<Card.Text>{movie.desc}</Card.Text>
							<Card.Button>{movie.ctaText}</Card.Button>
						</Card.Body>
					</Card>
				))}
			</section>
		</StyledMain>
	);
}

const StyledMain = styled(motion.main)`
	.Workarea-main {
		padding: 1.5rem;
	}
`;
