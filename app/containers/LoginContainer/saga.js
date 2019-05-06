import { put, takeLatest, all } from 'redux-saga/effects';
import { isTemplateElement } from '@babel/types';
import axios from 'axios';
import messages from './messages';
import { push } from 'react-router-redux';
import * as jwt from 'jwt-decode';

function* fetchData(action) {
  try {
    const auth = yield axios({
      method: 'post',
      url: 'http://localhost:3005/api/login',
      data: {
        username: action.data.username,
        password: action.data.password,
      },
    });

    yield put({ type: 'LOGIN_SUCCESS', json: auth });
    
    localStorage.setItem('token', auth.data.token);
    // console.log(auth.data.token);
    const decoded = jwt(localStorage.getItem('token'));
    console.log(decoded.user);   
    yield put(push('/path'));

    // console.log(auth.data.token);
  } catch (error) {
    console.log(error, 'from saga');
    yield put({ type: 'LOGIN_ERROR', payload: error });
  }
}

function* actionLoginWatcher() {
  yield takeLatest('LOGIN_REQUESTING', fetchData);
}

function* actionlogoutWatcher() {
  yield takeLatest('LOGOUT_REQUESTING', fetchData);
}

export default function* rootsaga() {
  yield all([actionLoginWatcher()],[actionlogoutWatcher()]);
}
