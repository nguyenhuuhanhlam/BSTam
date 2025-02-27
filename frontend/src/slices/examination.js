import { createSlice } from '@reduxjs/toolkit'
import { add, set } from 'date-fns'

const initialState = {
	examinations: [],
	selectedExamination: null
}

export const examinationSlice = createSlice({
	name: 'examination',
	initialState,
	reducers: {
		setExaminations: (state, { payload }) => {
			console.log('setExaminations', payload)
			state.examinations = payload
		},
		setSelectedExamination: (state, { payload }) => {
			state.selectedExamination = payload
		},
		addExamination: (state, { payload }) => {
			state.examinations.push(payload)
		},
		updateExamination: (state, { payload }) => {
			const index = state.examinations.findIndex(examination => examination.id === payload.id)
			if (index !== -1) {
				state.examinations[index] = payload
			}
		},
		deleteExamination: (state, { payload }) => {
			state.examinations = state.examinations.filter(examination => examination.id !== payload.id)
		},
	}
})

export const {
	setExaminations,
	setSelectedExamination,
	addExamination,
	updateExamination,
	deleteExamination
} = examinationSlice.actions

export default examinationSlice.reducer