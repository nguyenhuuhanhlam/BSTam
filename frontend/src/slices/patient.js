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
		updatePatient: (state, { payload }) => {
			const index = state.patients.findIndex(patient => patient.id === payload.id)
			state.patients[index] = payload
		},
	}
})

export const {
	setSelectedPatient,
	setPatients,
	insertPatient,
	updatePatient
} = patientSlice.actions

export default patientSlice.reducer