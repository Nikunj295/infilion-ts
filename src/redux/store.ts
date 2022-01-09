import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import { rootSaga } from './RootSaga';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export { store };
