import {all} from 'redux-saga/effects';
import {homepageSaga} from '../features/homepage/homepageSaga';

export default function* saga() {
    yield all ([
        homepageSaga(),
    ]);
}