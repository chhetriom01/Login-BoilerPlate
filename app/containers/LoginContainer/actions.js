

import { LOGIN_REQUESTING, LOGIN_SUCCESS } from './constants';

export const loginRequest = data => ({
  type: LOGIN_REQUESTING,
  data,
});

