import { put, takeLatest, all } from 'redux-saga/effects';
import { isTemplateElement } from '@babel/types';
import axios from 'axios';

function* fetchData(action) {
    try{
    const json =  yield axios ({
        method:'post',
    url:'http://localhost:3005/api/login',
    data:{
        username: action.data.username,
        password: action.data.password
    }
})
    // .then(response => response.json());

    yield put({type : "LOGIN_SUCCESS" , json: json})
}
}

function* actionWatcher() {
    yield takeLatest('LOGIN_REQUESTING', fetchData)
}

export default function* rootsaga()
{
    yield all([
        actionWatcher(),
    ]);
}

