import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Needs to wrap something || or make a div#box
// Need to move Styles to styled-components

export const ModalFramer = ({ children }) => {
	const [isToggled, setToggle] = useState(false);
	return (
		<>
			<button onClick={() => setToggle(true)}>Toggle</button>
			<AnimatePresence>
				{isToggled && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							position: "fixed",
							top: "30px",
							left: "50%",
							transform: "translate3d(-50%, 0, 0)"
						}}
					>
						<motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
							<button onClick={() => setToggle(false)}>Close</button>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
