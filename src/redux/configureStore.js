import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counter'
import loggerReducer from './slices/logger'
import profilesReducer from './slices/profiles'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        logger: loggerReducer,
        profiles: profilesReducer
    }
});