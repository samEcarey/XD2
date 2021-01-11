import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	callback
} from "react";
import axios from "axios";
import { GETUSERCONTEXT, useAuth } from "app/data";
import { cookies } from "../cookie";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const user = useGetUser();
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

//useAuth can check the AuthContext
export const useUser = () => {
	return useContext(UserContext);
};

function useGetUser() {
	const auth = useAuth();
	const [userState, setUserState] = useState();

	async function getUserContext() {
		console.log("oke");
		const url = GETUSERCONTEXT;
		var config = {
			method: "get",
			url: url,
			headers: {
				Authorization: `Bearer ${auth.authState}`,
				"Content-type": "application/json"
			}
		};
		await axios(config)
			.then(response => {
				setUserState(response.data.payload);
				console.log(response.data.payload);

				return response.data.payload;
			})
			.catch(error => {
				setUserState();
				console.log(error);
				return error;
			});
	}

	return { getUserContext, userState };
}
