import { useState } from 'react'
import { Splitter, Button, Modal, Flex } from 'antd'
import { useSelector } from 'react-redux'

import ExaminationDateList from './ExaminationDateList'
import ExaminationDiagnosis from './ExaminationDiagnosis'
import ExaminationPrescription from './ExaminationPrescription'
import ExaminationModalForm from './forms/ExaminationModalForm'

const DetailsSection = () => {
	const { selectedExamination } = useSelector(state => state.examinationSlice)

	return (
		<>
			<div className="pl-2">
				<Flex gap={10}>
					<ExaminationModalForm />
					{
						selectedExamination &&
						<Button size="small" color="red" variant="solid">Xóa</Button>
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