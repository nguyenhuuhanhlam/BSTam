import { useState } from 'react'
import { Splitter, Button, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ExaminationDateList from './ExaminationDateList'
import ExaminationDiagnosis from './ExaminationDiagnosis'
import ExaminationPrescription from './ExaminationPrescription'
import ExaminationModalForm from './forms/ExaminationModalForm'

const DetailsSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	return (
		<>
			<div className="flex pl-2">
				<ExaminationModalForm />
				<Button
					size="small"
					color="cyan"
					variant="solid"
					icon={<PlusOutlined />}
					onClick={showModal}
				>
					Thêm
				</Button>
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

			<Modal title="Examination" open={isModalOpen}>
				<p>Some contents...</p>
			</Modal>
		</>
	)
}

export default DetailsSection