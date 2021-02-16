import { combineReducers } from 'redux';

import courses from './courses';
import user from './user';

export default combineReducers({
   courses,
   user
});

