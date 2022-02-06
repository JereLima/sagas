// import {createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
// import rootReducer from "./rootReducer";
// import rootSaga from "./rootSaga";
// import Reactotron from './../configs/ReactotronConfig'

// const SagaMiddleware = createSagaMiddleware()

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(SagaMiddleware),
//         Reactotron.createEnhancer()
//     )
// )

// SagaMiddleware.run(rootSaga);
// export default store;

//--------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { SagaMonitor } from 'redux-saga';
import Reactotron from '../configs/ReactotronConfig';

import reducers from './rootReducer';
import sagas from './rootSaga';

const middleware = [];

const sagaMonitor = __DEV__
  ? (console.tron.createSagaMonitor())
  : undefined;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const composer =
  __DEV__ && Reactotron.createEnhancer
    ? compose(applyMiddleware(...middleware), Reactotron.createEnhancer())
    : compose(applyMiddleware(...middleware));


const store = createStore(reducers, composer);

//export const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default store;
