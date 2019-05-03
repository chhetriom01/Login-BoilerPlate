import { put, takeLatest, all } from 'redux-saga/effects';
import { isTemplateElement } from '@babel/types';
import axios from 'axios';
import messages from './messages';
import { push } from 'react-router-redux'


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
    yield put(push('/path'));

    // console.log(auth.data.token);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }
    yield put({ type: 'LOGIN_ERROR', payload: message });
  }
}

function* actionWatcher() {
  yield takeLatest('LOGIN_REQUESTING', fetchData);
}

export default function* rootsaga() {
  yield all([actionWatcher()]);
}
