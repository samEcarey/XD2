import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "app/services";
import { HashRouter as Router } from "react-router-dom";
import { AppContextProvider } from "app/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {cookies} from 'app/data/cookie'

ReactDOM.render(
	<React.StrictMode>
		
		<AppContextProvider>
			<Router>
				<App />
			</Router>
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
