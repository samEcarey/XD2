import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	callback
} from "react";
import axios from "axios";
import { cookies } from "../cookie";
import { LOGIN, FORGOT } from "../api/endpoints";
import cryptojs from "crypto-js";
import { createPortal } from "react-dom";
export const AuthContext = createContext();

//TODO: invalidate input while async/sign in

export const AuthContextProvider = ({ children }) => {
	const auth = useGetAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

//useAuth can check the AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};

//Provides user with an email notification of a first-time login.
//searches a list of previously authenticated users for the currently logged in user
function unusualSignInNotifcation(username) {
	if (username == "") {
		userList = [];
		localStorage.clear();
		return;
	}
	var password = "password"
	var userList = JSON.parse(localStorage.getItem("userList"));
	var encryptedUser = cryptojs.AES.encrypt(
		username,
		password
	).toString();

	if (!localStorage.getItem("userList")) {
		userList = [];
		userList.push(encryptedUser);
		localStorage.setItem("userList", JSON.stringify(userList));
	} else {
		var decryptedUser = cryptojs.AES.decrypt(
			encryptedUser,
			password
		).toString(cryptojs.enc.Utf8);
		//console.log(userList)

		//console.log(username,decryptedUser);

		var userFound = userList.some(user => {
			
			var decryptedElement = cryptojs.AES.decrypt(user,password).toString(cryptojs.enc.Utf8)
			console.log(decryptedUser)
			console.log(decryptedElement)
			if (decryptedUser == decryptedElement) {
				return true;
			}
		});
		if (!userFound) {
			userList.push(encryptedUser);
			localStorage.setItem("userList", JSON.stringify(userList));
			console.log(userList, JSON.parse(localStorage.getItem("userList")));
		}
	}
}

//gets the AuthContext for AuthContextProvider to provide AppRoutes in App.jsxx
function useGetAuth() {
	const [authState, setAuthState] = useState(cookies.get("token"));
	const signIn = (username, password, callback) => {
		const url = "104.130.246.16:8080/login";

		let jwt;
		axios
			.post(url, {
				//encrypt here
				emailaddress: { username },
				passwordhash: { password },
				passwordsalt: "456"
			})

			.then(function(response) {
				console.log("hello")
				setAuthState(response.data.token);
				cookies.set("token", authState);
				cookies.set();

				callback();
			})
			.catch(function(error) {
				jwt = null;
				setAuthState(null);
				unusualSignInNotifcation(username);
				callback();
				return authState;
			});
	};

	const submit = (oneTimeCode, callback) => {
		const url = FORGOT;
	//	console.log(oneTimeCode);
		axios
			.post(url, {
				//encrypt here
				oneTimeCode: { oneTimeCode }
			})

			.then(function(response) {
				//setAuthState(response.data);
				//.set("token", response.data);
				console.log("auth");
				callback();
			})
			.catch(function(error) {
				setAuthState(null);
				callback();
				return authState;
			});
	};

	//TODO: useEffect should change the cookie state in callback causing any component that utilizes useAuth to rerender?

	//if token ok, jwt = jwt
	//..else, jwt = null + error message please sign back in
	//fetchData on context change

	return { signIn, authState, submit };
}

export const resetPassword = (email, callback) => {
    const url = FORGOT;
    let res;

    axios
        .post(url, {
            email: { email },
        })

        .then(function(response) {
            res = response.data;
          //  console.log(res)
            callback()
        })

        .catch(function(error) {
            res = null;
            callback()
        });

};