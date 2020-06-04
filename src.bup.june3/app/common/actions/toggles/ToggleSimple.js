import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ToggleSimple() {
	const [isToggled, setToggle] = useState(1);
	return (
		<section>
			<AnimatePresence>
				{isToggled && (
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						Super Cool
					</motion.h2>
				)}
			</AnimatePresence>
			<button onClick={() => setToggle(prevValue => (prevValue ? 0 : 1))}>
				Toggle
			</button>
		</section>
	);
}
