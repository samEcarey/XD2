import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Accordion = () => {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<article>
			<h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>
				The Heading
			</h2>
			<AnimatePresence>
				{isToggled && (
					<motion.div
						style={{ overflow: "hidden" }}
						initial={{ opacity: 0, height: 0, x: -300 }}
						animate={{ opacity: 1, height: "auto", x: 0 }}
						exit={{ opacity: 0, height: 0, x: -300 }}
					>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							iusto ea voluptas alias placeat impedit corrupti ratione, nihil
							sint saepe repudiandae expedita ipsum maiores inventore eveniet
							sit fuga corporis? Velit ad dolorem eius sunt ex exercitationem,
							sequi ut ipsum voluptates.
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};
