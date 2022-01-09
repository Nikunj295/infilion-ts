import React, { FC } from 'react';
import {  store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/app.scss';
import CustomTable from './components/Tables/CustomTable';

const App: React.FC =  () => {
	return (
		<Provider store={store}>
			<CustomTable />
		</Provider>
	);
};

export default App;
