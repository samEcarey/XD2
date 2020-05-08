import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AccordionSimple = () => {
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
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
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
