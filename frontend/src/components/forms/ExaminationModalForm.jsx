import { useState } from 'react'
import { Button, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const ExaminationModalForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	return (
		<>
			<Button
				size="small"
				color="cyan"
				variant="solid"
				icon={<PlusOutlined />}
				onClick={showModal}
			>
				Thêm
			</Button>

			<Modal title="Examination" open={isModalOpen}>
				<p>Some contents...</p>
			</Modal>
		</>
	)
}

export default ExaminationModalForm