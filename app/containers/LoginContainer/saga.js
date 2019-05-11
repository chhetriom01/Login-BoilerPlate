import { put, takeLatest, all } from 'redux-saga/effects';
import { isTemplateElement } from '@babel/types';
import axios from 'axios';
import messages from './messages';
import { push } from 'react-router-redux';
import * as type from './constants'
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
    // localStorage.setItem('token', auth.data.token);
    localStorage.setItem('token', auth.data.token);
    yield put(push('/dashboard'));
  } catch (error) {
    console.log(error, 'from saga');
    yield put({ type: 'LOGIN_ERROR', payload: error });
    yield put(push('/'))
  }
}

function* actionWatcher() {
  yield takeLatest('LOGIN_REQUESTING', fetchData);
}

export default function* rootsaga() {
  yield all([actionWatcher()]);
}
