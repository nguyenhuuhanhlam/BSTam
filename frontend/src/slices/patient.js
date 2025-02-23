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
		}
	}
})


export const { setPatients } = patientSlice.actions
export default patientSlice.reducer