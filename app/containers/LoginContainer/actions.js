

// import { LOGIN_REQUESTING, LOGIN_SUCCESS } from './constants';
import action from '../../utils/action';
import * as fix from './constants'
// export const loginRequest = data => ({
//   type: LOGIN_REQUESTING,
//   data,
// });

export const loginRequest = action(fix.LOGIN_REQUESTING,'data')