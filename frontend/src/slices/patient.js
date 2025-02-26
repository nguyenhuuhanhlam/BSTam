import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	patients: [],
	selectedPatient: null
}

export const patientSlice = createSlice({
	name: 'patient',
	initialState,
	reducers: {
		setSelectedPatient: (state, { payload }) => {
			state.selectedPatient = payload
		},
		setPatients: (state, { payload }) => {
			state.patients = payload
		},
		insertPatient: (state, { payload }) => {
			state.patients.push(payload)
		},
	}
})

export const {
	setSelectedPatient,
	setPatients,
	insertPatient
} = patientSlice.actions

export default patientSlice.reducer