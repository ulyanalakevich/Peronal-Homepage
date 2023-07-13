import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../common/themeSlice';
import saga from './saga';
import homepageReducer from "../features/homepage/homepageSlice"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;