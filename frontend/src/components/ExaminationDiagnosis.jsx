import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ExaminationDiagnosis = () => {
	const { selectedExamination } = useSelector(state => state.examinationSlice)

	return (
		<div>
			{selectedExamination && (
				<div>
					<h1>Chẩn Đoán</h1>
					<p>{selectedExamination.diagnosis_note}</p>
				</div>
			)}
		</div>
	)
}

export default ExaminationDiagnosis