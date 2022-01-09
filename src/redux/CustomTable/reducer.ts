import { DataItem } from '../../types/CustomTable';
import { ActionReturn } from './action';
import { DELETE_TABLE_DATA, EDIT_TABLE_DATA, GET_TABLE_DATA, SET_TABLE_DATA } from './types';

const INITIAL_VALUE: { data: DataItem[]; id: string | number } = {
	data: [],
	id: null,
};

const tableReducer = (state = INITIAL_VALUE, action: ActionReturn) => {
	switch (action.type) {
		case DELETE_TABLE_DATA: {
			const modifiedData = state.data.filter((item) => {
				return item.id.toString() !== action.payload.toString();
			});
			localStorage.setItem('data',JSON.stringify(modifiedData));
			return {
				...state,
				data: modifiedData,
			};
		}
		
		case SET_TABLE_DATA:
			return {
				...state,
				data: action.payload,
			};

		case EDIT_TABLE_DATA: {
			const modifiedDataIndex = state.data.findIndex((item) => item.id.toString() === action.payload.id.toString());
			var modifiedData: DataItem[] = state.data;
			if (modifiedDataIndex >= 0) {
				modifiedData[modifiedDataIndex] = action.payload;
			}
			localStorage.setItem('data',JSON.stringify(modifiedData));
			return {
				...state,
				data: modifiedData,
			};
		}
		case GET_TABLE_DATA:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default tableReducer;
