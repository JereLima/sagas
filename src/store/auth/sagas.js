import {all, call, put, takeLatest} from 'redux-saga/effects';
import { api } from '../../services/api';
import { types } from './types';
import {setComments} from './actions';

function* getPost(){
   const response = yield call(api.get, '/1/comments')
   yield put(setComments(response.data))
}
export default all([takeLatest(types.GET_COMMENTS, getPost)]);