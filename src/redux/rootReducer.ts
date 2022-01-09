import { combineReducers } from 'redux';
import tableReducer from './CustomTable/reducer';

// Combine all reducer 
const rootReducer = combineReducers({
	tableData: tableReducer,
});
export default rootReducer;
