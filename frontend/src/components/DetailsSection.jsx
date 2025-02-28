import { useState } from 'react'
import { Splitter, Button, Modal, Flex } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import ExaminationDateList from './ExaminationDateList'
import ExaminationDiagnosis from './ExaminationDiagnosis'
import ExaminationPrescription from './ExaminationPrescription'
import ExaminationModalForm from './forms/ExaminationModalForm'

import { deleteExamination as deleteExaminationAPI } from '../api'
import { deleteExamination, setSelectedExamination } from '../slices/examination'

const DetailsSection = () => {
	const { selectedExamination } = useSelector(state => state.examinationSlice)
	const dispatch = useDispatch()

	const handleDeleteExamination = () => {
		Modal.confirm({
			title: 'Xác nhận xóa',
			content: 'Bạn có chắc muốn xóa lượt khám này?',
			onOk() {
				deleteExaminationAPI(selectedExamination.id)
					.then(() => {
						dispatch(deleteExamination({ id: selectedExamination.id }))
						dispatch(setSelectedExamination(null))
					})
					.catch((err) => {
						console.log(err)
					})
			},
			onCancel() {
				console.log('Hủy xóa lượt khám')
			}
		})
	}

	return (
		<>
			<div className="pl-2">
				<Flex gap={10}>
					<ExaminationModalForm />
					{
						selectedExamination &&
						<Button
							size="small"
							color="red"
							variant="dashed"
							onClick={handleDeleteExamination}
						>Xóa</Button>
					}
				</Flex>
			</div>

			<div className="p-2">
				<Splitter>
					<Splitter.Panel>
						<ExaminationDateList />
					</Splitter.Panel>
					<Splitter.Panel>
						<ExaminationDiagnosis />
					</Splitter.Panel>
					<Splitter.Panel>
						<ExaminationPrescription />
					</Splitter.Panel>
				</Splitter>
			</div>
		</>
	)
}

export default DetailsSection