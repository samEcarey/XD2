import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	callback
} from "react";
import axios from "axios";
import { cookies } from "../cookie";
import { LOGIN, FORGOT, VALIDATECODE, NEWPASSWORD, REQUIREMENTS, GETUSERCONTEXT, useUser } from "app/data";
import cryptojs from "crypto-js";
import { createPortal } from "react-dom";
export const AuthContext = createContext();

export async function getPasswordRequirements(email,password){
	const url = REQUIREMENTS;
	return await axios
		.get(url)
		.then(function(response) {
			console.log(response)
			return(response)

		})
		.catch(function(error) {
			return(error)

		});
		
};


export async function newPassword(email,password){
	const url = NEWPASSWORD;
	let hasError;
	return await axios
		.post(url, {
			//encrypt here?
			emailaddress: email,
			passwordhash:password,
			passwordsalt: ""
		})

		.then(function(response) {
			return(response)

		})
		.catch(function(error) {
			return(error)

		});
		
};
export async function submit(email,oneTimeCode){
	const url = VALIDATECODE;
	let hasError;
	return await axios
		.post(url, {
			//encrypt here?
			emailaddress: email,
			passwordhash:oneTimeCode 
		})

		.then(function(response) {
			return(response)

		})
		.catch(function(error) {
			return(error)

		});
		
};
export async function resetPassword (email){
	const url = FORGOT;
	let res;

	return await axios
		.post(url, {
			emailaddress: email,
			passwordhash: "",
			passwordsalt: ""
		})

		.then(function(response) {
			return(response.data.message)
		})

		.catch(function(error) {
			return(error.response.data.message)
		});

};

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
	var password = "password";
	var userList = JSON.parse(localStorage.getItem("userList"));
	var encryptedUser = cryptojs.AES.encrypt(username, password).toString();

	if (!localStorage.getItem("userList")) {
		userList = [];
		userList.push(encryptedUser);
		localStorage.setItem("userList", JSON.stringify(userList));
	} else {
		var decryptedUser = cryptojs.AES.decrypt(encryptedUser, password).toString(
			cryptojs.enc.Utf8
		); 
		//	console.log(userList);

		//	console.log(username, decryptedUser);

		var userFound = userList.some(user => {
			var decryptedElement = cryptojs.AES.decrypt(user, password).toString(
				cryptojs.enc.Utf8
			);
		//	console.log(decryptedUser);
		//	console.log(decryptedElement);
			if (decryptedUser == decryptedElement) {
				return true;
			}
		});
		if (!userFound) {
			userList.push(encryptedUser);
			localStorage.setItem("userList", JSON.stringify(userList));
			//console.log(userList, JSON.parse(localStorage.getItem("userList")));
		}
	}
}

//gets the AuthContext for AuthContextProvider to provide AppRoutes in App.jsxx
function useGetAuth() {
	const [authState, setAuthState] = useState(cookies.get("token"));
	useEffect(()=>{
		//console.log(authState)
	},[authState])
	//	const [salt, setSalt] = useState(null)

	async function signIn(username, password, callback) {
		const url = LOGIN;

		async function getSalt() {
			return axios
				.post(url, {
					emailaddress: username,
					passwordhash: "",
					passwordsalt: ""
				})
				.then(response => {
					console.log(response);
					let salt = response.data.payload.passwordsalt;
					return authenticateHash(salt);
					var hash = cryptojs.SHA256(password + salt);
					//					await authenticateHash()

					setAuthState(null);
					console.log(salt);
					console.log(hash.toString());
				})
				.catch(function(error) {
					setAuthState();
					cookies.remove("token");
					//callback();

					return error;
					console.log(error);
					jwt = null;
					return authState;
				});
		}

		function authenticateHash(salt) {
			console.log(password + salt);
			var hash = cryptojs.SHA256(password + salt);
			var hashStr = hash.toString();
			console.log(hashStr)
			console.log(username,hashStr)
			axios
				.put(url, {
					emailaddress: username,
					passwordhash: hashStr,
					passwordsalt: ""
				})
				.then(response => {
					unusualSignInNotifcation(username);
					setAuthState(response.data.payload.token);
					cookies.set("token", response.data.payload.token);

					return response;
				})
				.catch(error => {
					setAuthState();
					cookies.remove("token");
					console.log(error);
					callback();

					return error;
				});
		}

		let jwt;
		const salt = await getSalt();

		console.log(salt);
	}
	 
	const modifyAuthState = () => {
		setAuthState();
		cookies.remove("token");

		console.log(authState);
		return null;
	};


	//TODO: useEffect should change the cookie state in callback causing any component that utilizes useAuth to rerender?

	//if token ok, jwt = jwt
	//..else, jwt = null + error message please sign back in
	//fetchData on context change

	return { signIn, authState, modifyAuthState };
}
