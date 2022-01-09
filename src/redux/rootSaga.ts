import { all, call } from 'redux-saga/effects';
import { tableDataSaga } from './CustomTable/saga';

export function* rootSaga() {
	yield all([call(tableDataSaga)]);
}
