import React from "react";
import {
	GridWorkspaceScreen,
	GridModuleView,
	GridModuleWorkflow
} from "./grids";
import { FlexDiv } from "./flex";
import { SkeletonBurgerMenu } from "../appbase";
import { FaCircle } from "react-icons/fa";

export function Workspace() {
	return (
		<>
			<GridWorkspaceScreen id="Workspace-screen">
				<section className="App-brand">
					<FaCircle size="3rem" />
				</section>
				<section className="App-header">Header</section>
				<section className="App-sidebar">aside</section>
				<section className="App-workarea">
					<GridModuleView id="Module-view">
						<section className="Module-brand">Module Brand</section>
						<header className="Module-header">Module Header</header>
						<article className="Module-article">Module Help</article>
						<main className="Module-workflow">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corporis doloribus temporibus est ipsum et nisi quisquam
								incidunt maiores amet nihil saepe laudantium eligendi delectus,
								assumenda in. Delectus cupiditate possimus.
							</p>
							<img src="https://placehold.it/350x200" alt="placeholder" />
							{/* <GridModuleWorkflow id="Module-workflow">
								<div className="Module-drawer">hi</div>
							</GridModuleWorkflow> */}
						</main>
					</GridModuleView>
				</section>
			</GridWorkspaceScreen>
		</>
	);
}
