import { CREATE_TABLE } from './tableConsts';
import axios from 'axios';

const SERVER = 'http://localhost:4004/tableapp';

export const getTable = () => async dispatch => {
	try {
		const res = await axios.get(`${SERVER}`);
		dispatch({
			type: CREATE_TABLE,
			payload: res.data
		});
	} catch (e) {
		console.log(e);
	}
}