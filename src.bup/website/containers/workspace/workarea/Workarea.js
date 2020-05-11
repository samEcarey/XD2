import React from "react";
import styled from "styled-components";
import { MobileLeftDrawer } from "../../../../applayout";
import { AppsMenu } from "../../../menus";

import { Card } from "../../../../appbase";
import movies from "../../../../appdata/data";

export function Workarea() {
	return (
		<StyledSection className="Workspace-workarea">
			<header className="Workarea-header">
				<h1>Header</h1>
				<MobileLeftDrawer>
					<AppsMenu />
				</MobileLeftDrawer>
			</header>
			<main className="Workarea-main">
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
						<Card classes="card-workarea" key={`${movie.id}`}>
							<Card.Image src={movie.image} title={movie.alt}></Card.Image>
							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<Card.Text>{movie.desc}</Card.Text>
								<Card.Button>{movie.ctaText}</Card.Button>
							</Card.Body>
						</Card>
					))}
				</section>
			</main>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	background-color: #f9f9f9;
	.Workarea-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
		align-content: center;

		padding: 1rem 1.5rem 1rem 1.5rem;
		h1 {
			margin: 0;
			font-size: 3.4rem;
		}
		background: navy;
	}
	.Workarea-main {
		padding: 1.5rem;
	}
`;
