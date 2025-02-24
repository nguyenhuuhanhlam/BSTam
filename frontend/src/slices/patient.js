import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	patients: []
}

export const patientSlice = createSlice({
	name: 'patient',
	initialState,
	reducers: {
		setPatients: (state, { payload }) => {
			state.patients = payload
		},
		insertPatient: (state, { payload }) => {
			state.patients.push(payload)
		},
	}
})

export const {
	setPatients,
	insertPatient
} = patientSlice.actions

export default patientSlice.reducer