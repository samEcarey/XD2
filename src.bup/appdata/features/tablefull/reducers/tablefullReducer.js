import { CREATE_TABLE } from '../actions/tableConsts';

const initialState = {
	tableData: {
		table:{
			rows: [],
			columns: []
		}
	}
}

export default function(state = initialState, action) {

	switch(action.type) {
		case CREATE_TABLE:
			return {
				...state,
				tableData: action.payload
			}
		default:
			return state;
	}

}