import { combineReducers } from 'redux';

import { appointmentReducer } from 'src/redux//slices/appointmentSlice';
import { caregiverReducer } from 'src/redux//slices/caregiverSlice';
import { roleReducer } from 'src/redux//slices/roleSlice';
import { servicesReducer } from 'src/redux//slices/servicesSlice';
import { tokenReducer } from 'src/redux//slices/tokenSlice';
import { addressReducer } from 'src/redux/slices/addressSlice';
import { availableDaysReducer } from 'src/redux/slices/availableDaysSlice';
import { certificateReducer } from 'src/redux/slices/certificateSlice';
import { personalDetailsReducer } from 'src/redux/slices/personalDetailsSlice';
import { rateReducer } from 'src/redux/slices/rateSlice';
import { roleReducer } from 'src/redux/slices/roleSlice';
import { tokenReducer } from 'src/redux/slices/tokenSlice';
import { appointmentReducer } from './slices/appointmentSlice';

import { healthQuestionnaireReducer } from './slices/healthQuestionnaireSlice';
import { servicesReducer } from './slices/servicesSlice';

const rootReducer = combineReducers({
  role: roleReducer,
  personalDetails: personalDetailsReducer,
  address: addressReducer,
  token: tokenReducer,
  caregiver: caregiverReducer,
  certificate: certificateReducer,
  availableDays: availableDaysReducer,
  healthQuestionnaire: healthQuestionnaireReducer,
  services: servicesReducer,
  hourlyRate: rateReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
