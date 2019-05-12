import action from '../../utils/action';
import * as type from './constants';

export const submittestimonial = action(type.SUBMIT_REQUESTING, 'data');

export const fetchRequesting = action(type.FETCH_REQUESTING);

export const deleteRequesting = action(type.DELETE_REQUESTING,'id');
