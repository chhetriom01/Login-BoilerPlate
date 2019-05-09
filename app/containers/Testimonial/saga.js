import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
import * as type from './constants';

function* testimonialSaga(action) {
  console.log('hi i am from saga');
  try {
    const Post = yield axios({
      method: 'post',
      url: 'http://localhost:3005/api/testimonial',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      data: {
        personName: action.data.personName,
        testimonialContent: action.data.testimonialContent,
        organization: action.data.organization,
        message: action.data.message,
      },
    });

    yield put({ type: type.SUBMIT_SUCCESS, json: Post });
    console.log(Post);
    yield put(push('/testomonial'));
  } catch (error) {
    yield put({ type: type.SUBMIT_ERROR });
  }
}
function* testimonialFetch(action) {
  try {
    const Fetch = yield axios({
      method: 'get',
      url: 'http://localhost:3005/api/testimonial',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    yield put({ type: type.FETCH_SUCCESS, json: Fetch });
    yield put(push('/listTestimonial'));
  } catch (error) {
    yield put({ type: type.FETCH_ERROR });
  }
}

function* actionWatcher() {
  yield takeLatest('SUBMIT_REQUESTING', testimonialSaga);
  yield takeLatest('FETCH_REQUESTING', testimonialFetch);
}

export default function* rootsaga() {
  yield all([actionWatcher()]);
}
