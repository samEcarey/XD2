import React, { useState } from "react";
import { InputRange, ToggleSimple, ModalFramer } from "app/common";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./components/Elements";
import "./assets/App.css";
import Menu from "./components/Menu";
import blue from "./assets/blue.png";
import purp from "./assets/purp.png";
import black from "./assets/black.png";
import green from "./assets/green.png";
import { Modal } from "./components/Modal";
// import { AccordionSimple } from "./components/AccordionSimple";
import { Accordion } from "./components/Accordion";
import { Nav } from "./components/Nav";

export function Framer() {
	const [value, setValue] = useState(0);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isToggled, setToggle] = useState(false);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Header>
				<Menu onClick={() => setIsNavOpen(true)} />
				<Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
				<h1>Header</h1>
			</Header>
			<Container>
				<h2>Super Cool</h2>
				<button onClick={() => setToggle(true)}>Toggle</button>
				<br />
				<input
					type="range"
					min="-100"
					max="100"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<p>{value}</p>

				<Accordion />

				<Modal isToggled={isToggled} setToggle={setToggle}>
					<Card style={{ background: "var(--purp)" }}>
						<h3>Some card</h3>
						<img src={purp} />
					</Card>
				</Modal>

				<CardGrid>
					<Card style={{ background: "var(--purp)" }}>
						<h3>Some card</h3>
						<img src={purp} />
					</Card>
					<Card style={{ background: "var(--blue)" }}>
						<h3>Some card</h3>
						<img src={blue} />
					</Card>
					<Card style={{ background: "var(--black)" }}>
						<h3>Some card</h3>
						<img src={black} />
					</Card>
					<Card style={{ background: "var(--green)" }}>
						<h3>Some card</h3>
						<img src={green} />
					</Card>
				</CardGrid>
			</Container>
		</motion.div>
	);
}

export default Framer;
