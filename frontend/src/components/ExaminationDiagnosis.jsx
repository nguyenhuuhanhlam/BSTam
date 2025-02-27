import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from 'antd'

const { Text } = Typography

const ExaminationDiagnosis = () => {
	const { selectedExamination } = useSelector(state => state.examinationSlice)

	return (
		<div className="pl-2">
			{
				selectedExamination && (
					<div>
						<Text code>Chẩn Đoán</Text>
						<p className="whitespace-pre-wrap">{selectedExamination.diagnosis_note}</p>
					</div>
				)
			}
		</div>
	)
}

export default ExaminationDiagnosis