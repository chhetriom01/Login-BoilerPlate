import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
import API from 'utils/apiHelper';
import { API_BASE } from './constants';
import action from '../../utils/action';
import * as type from './constants';
function* testimonialSaga(action) {
  const { data } = action;
  let token = localStorage.getItem('token');

  console.log('hi i am from saga');
  try {
    // yield fork(
    //   API.post(
    //     `${API_BASE}${testimonial}`,
    //     onSuccess.SUBMIT_SUCCESS,
    //     onerror.SUBMIT_ERROR,
    //     data,
    //     token,
    //   ),
    // );

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
    console.log('from saga of testimonial saga');
    yield put(push('/testomonial'));
  } catch (error) {
    yield put({ type: type.SUBMIT_ERROR });
  }
}
function* testimonialFetch(action) {
  let token = localStorage.getItem('token');
  try {
    // yield fork(
    //   API.get(
    //     `testimonial`,
    //     onSuccess.FETCH_SUCCESS,
    //     token,
    //   ),
    // );

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
  yield takeLatest(type.SUBMIT_REQUESTING, testimonialSaga);
  yield takeLatest(type.FETCH_REQUESTING, testimonialFetch);
}

export default function* rootsaga() {
  yield all([actionWatcher()]);
}
