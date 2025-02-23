import { configureStore } from '@reduxjs/toolkit'

import patientReducer from './slices/patient'

const store = configureStore({
	reducer: {
		patientSlice: patientReducer
	}
})

export default store