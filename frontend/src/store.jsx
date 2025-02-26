import { configureStore } from '@reduxjs/toolkit'

import patientReducer from './slices/patient'
import examinationReducer from './slices/examination'

const store = configureStore({
	reducer: {
		patientSlice: patientReducer,
		examinationSlice: examinationReducer
	}
})

export default store