import { combineReducers } from 'redux';

import { addressReducer } from 'src/redux/slices/addressSlice';
import { appointmentReducer } from 'src/redux/slices/appointmentSlice';
import { availableDaysReducer } from 'src/redux/slices/availableDaysSlice';
import { caregiverReducer } from 'src/redux/slices/caregiverSlice';
import { certificateReducer } from 'src/redux/slices/certificateSlice';
import { personalDetailsReducer } from 'src/redux/slices/personalDetailsSlice';
import { roleReducer } from 'src/redux/slices/roleSlice';
import { tokenReducer } from 'src/redux/slices/tokenSlice';
import { workExperienceReducer } from 'src/redux/slices/workEperienceSlice';
import { rateReducer } from 'src/redux/slices/rateSlice';
import { servicesReducer } from './slices/servicesSlice';
import { healthQuestionnaireReducer } from './slices/healthQuestionnaireSlice';

const rootReducer = combineReducers({
  role: roleReducer,
  personalDetails: personalDetailsReducer,
  address: addressReducer,
  token: tokenReducer,
  caregiver: caregiverReducer,
  certificate: certificateReducer,
  availableDays: availableDaysReducer,
  healthQuestionnaire: healthQuestionnaireReducer,
  workExperience: workExperienceReducer,
  services: servicesReducer,
  hourlyRate: rateReducer,
  appointment: appointmentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;