import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "app/services";
import { Provider } from 'react-redux'
import store from 'appdata/redux/store'
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "app/data";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContextProvider>
				<Router>
					<App />
				</Router>
			</AppContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
