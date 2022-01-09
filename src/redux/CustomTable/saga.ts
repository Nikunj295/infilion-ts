import { takeLatest, put, call, all } from 'redux-saga/effects';
import {GET_TABLE_DATA} from './types';
import {  
	setTableData
} from './action';
import 'regenerator-runtime/runtime';

function* getDataAction() {
	try {
		const result: any = yield fetch('https://reqres.in/api/users?page=1');
		const parsedResult = yield result.json();
		yield localStorage.setItem('data',JSON.stringify(parsedResult.data));
		yield put(setTableData(parsedResult.data));  	
	} catch (error) {
		console.log(error);
	}
}

function* tabledata() {
	yield takeLatest(GET_TABLE_DATA, getDataAction);
}

export function* tableDataSaga() {
	yield all([call(tabledata)]);
}
