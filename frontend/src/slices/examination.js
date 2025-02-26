import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedExamination: null
}

export const examinationSlice = createSlice({
	name: 'examination',
	initialState,
	reducers: {
		setSelectedExamination: (state, { payload }) => {
			state.selectedExamination = payload
		}
	}
})

export const {
	setSelectedExamination
} = examinationSlice.actions

export default examinationSlice.reducer