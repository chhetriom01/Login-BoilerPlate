import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';

function* testimonialSaga(action) {
  console.log("hi i am fro saga")
  try {
    const push = yield axios({
      method: 'post',
      url: 'http://localhost:3005/api/testimonial',
      data: {
        personName: action.data.personName,
        testimonialContent: action.data.testimonialContent,
        organization: action.data.organization,
        message: action.data.message,
        token: localStorage.getItem("token"),
      },
    });
    yield put({ type: 'SUBMIT_SUCCESS', json: push });
    consloe.log('from saga hello om');
    yield put(push('/dashboard'));
  } catch (error) {
    yield put({ type: 'SUBMIT_ERROR' });
  }
}
function* actionWatcher() {
  yield takeLatest('SUBMIT_REQUESTING', testimonialSaga);
}
export default function* rootsaga() {
  yield all([actionWatcher()]);
}
