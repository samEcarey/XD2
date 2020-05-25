import React from "react";

export function useFullscreenStatus(state, dispatch, elRef) {
	const setFullscreen = () => {
		if (elRef.current == null) return;

		elRef.current
			.requestFullscreen()
			.then(() => {
				dispatch({
					isFullscreen: document[getBrowserFullscreenElementProp()] != null
				});
			})
			.catch(() => {
				dispatch({ isFullscreen: false });
			});
	};

	React.useLayoutEffect(() => {
		document.onfullscreenchange = () =>
			dispatch({
				isFullscreen: document[getBrowserFullscreenElementProp()] != null
			});

		return () => (document.onfullscreenchange = undefined);
	});
	const isFullscreen = state.isFullscreen;
	return [isFullscreen, setFullscreen];
}

function getBrowserFullscreenElementProp() {
	if (typeof document.fullscreenElement !== "undefined") {
		return "fullscreenElement";
	} else if (typeof document.mozFullScreenElement !== "undefined") {
		return "mozFullScreenElement";
	} else if (typeof document.msFullscreenElement !== "undefined") {
		return "msFullscreenElement";
	} else if (typeof document.webkitFullscreenElement !== "undefined") {
		return "webkitFullscreenElement";
	} else {
		throw new Error("fullscreenElement is not supported by this browser");
	}
}
