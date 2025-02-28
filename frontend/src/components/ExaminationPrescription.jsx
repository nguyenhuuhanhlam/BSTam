import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Input } from 'antd'

const { Text } = Typography
const { TextArea } = Input

const ExaminationPrescription = () => {
	const { selectedExamination } = useSelector(state => state.examinationSlice)

	return (
		<div className="pl-4">
			{
				selectedExamination && (
					<div>
						<Text code>Đơn Thuốc</Text>
						<p className="whitespace-pre-wrap pt-2">{selectedExamination.prescription_note}</p>
					</div>
				)
			}
		</div>
	)
}

export default ExaminationPrescription;