import { DataItem } from '../../types/CustomTable';
import { GET_TABLE_DATA, SET_TABLE_DATA, DELETE_TABLE_DATA, EDIT_TABLE_DATA } from './types';

export interface ActionReturn {
	type: string;
	payload?: any;
}

export const getTableData = (): ActionReturn => {
	return {
		type: GET_TABLE_DATA,
	};
};

export const setTableData = (data: DataItem[]): ActionReturn => {
	return {
		type: SET_TABLE_DATA,
		payload: data,
	};
};

export const deleteTableData = (id: string | number): ActionReturn => {
	return {
		type: DELETE_TABLE_DATA,
		payload: id,
	};
};

export const editTableData = (data: DataItem): ActionReturn => {
	return {
		type: EDIT_TABLE_DATA,
		payload: data,
	};
};
