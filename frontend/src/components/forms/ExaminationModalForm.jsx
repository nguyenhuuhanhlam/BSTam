import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { Button, Modal, Input, Form } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { postExamination } from '../../api'
import { addExamination } from '../../slices/examination'

const { TextArea } = Input

const ExaminationModalForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [form] = Form.useForm()
	const dispatch = useDispatch()
	const { selectedPatient } = useSelector(state => state.patientSlice)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleCancel = () => {
		form.resetFields()
		setIsModalOpen(false)
	}

	const handleOk = () => {
		form.submit()
	}

	const handleClosed = () => {
		form.resetFields()
		setIsModalOpen(false)
	}

	const handleFormSubmit = async (values) => {
		const examination = {
			date: format(new Date(), 'yyyy-MM-dd'),
			diagnosis_note: values.diagnosis,
			prescription_note: values.prescription,
			patient: selectedPatient.id,
		}

		postExamination(examination)
			.then(res => {
				dispatch(addExamination(res.data))
				form.resetFields()
				setIsModalOpen(false)
			}
			).catch(error => console.log(error))
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

			<Modal
				title="Examination"
				open={isModalOpen}
				maskClosable={false}
				onCancel={handleCancel}
				onOk={handleOk}
				onClose={handleClosed}
			>
				<div className="py-2" />
				<Form
					form={form}
					onFinish={handleFormSubmit}
				>
					<Form.Item
						name="diagnosis"
						label="Chẩn Đoán"
						rules={[{ required: true, message: 'Thiếu thông tin chẩn đoán.' }]}
					>
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item
						name="prescription"
						label="Đơn Thuốc"
						rules={[{ required: true, message: 'Chưa nhập đơn thuốc.' }]}
					>
						<TextArea rows={4} />
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default ExaminationModalForm