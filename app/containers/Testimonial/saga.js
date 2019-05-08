import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios';


import { push } from 'connected-react-router';
// Individual exports for testing
function* testimonialSaga(action) {
  try {
const push = yield axios ({
    method: 'post',
    url :'http://localhost:3000/api/testimonial',
    data:{
        personName: action.data.personName,
        testimonial: action.data.testimonial,
        organization: action.data.organization,
        message: action.data.organization
    }
});
yield put ({type:'SUBMIT_SUCCESS', json: push})
// localStorage.setItem('token',auth.data.toke)
consloe.log(push)
  } catch (error) {
    yield put({ type: 'SUBMIT_ERROR' });
  }

  // See example in containers/HomePage/saga.js
}
