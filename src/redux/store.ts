import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from 'src/redux/rootReducer';
import { addressReducer } from 'src/redux/slices/addressSlice';
import { availableDaysReducer } from 'src/redux/slices/availableDaysSlice';
import { personalDetailsReducer } from 'src/redux/slices/personalDetailsSlice';
import { rateReducer } from 'src/redux/slices/rateSlice';
import { roleReducer } from 'src/redux/slices/roleSlice';
import { servicesReducer } from 'src/redux/slices/servicesSlice';
import { tokenReducer } from 'src/redux/slices/tokenSlice';
import { appointmentReducer } from './slices/appointmentSlice';
import { caregiverReducer } from './slices/caregiverSlice';

import accountVerificationApi from 'src/redux/api/accountVerificationAPI';
import authApi from 'src/redux/api/authApi';
import profileApi from 'src/redux/api/profileCompleteApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedTokenReducer = persistReducer(persistConfig, tokenReducer);

const store = configureStore({
  reducer: {
    role: roleReducer,
    personalDetails: personalDetailsReducer,
    address: addressReducer,
    token: persistedTokenReducer,
    caregiver: caregiverReducer,
    availableDays: availableDaysReducer,
    services: servicesReducer,
    hourlyRate: rateReducer,
    appointment: appointmentReducer,
    [authApi.reducerPath]: authApi.reducer,
    [accountVerificationApi.reducerPath]: accountVerificationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([authApi.middleware, accountVerificationApi.middleware, profileApi.middleware]),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { persistor, store };
