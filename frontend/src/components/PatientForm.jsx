import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, InputNumber, Space } from 'antd'
import { postPatient, patchPatient } from '../api'
import { splitFullName } from '../utils'
import { insertPatient, updatePatient } from '../slices/patient'

const PatientForm = () => {
	const [editmode, setEditMode] = useState(false)
	const [form] = Form.useForm()
	const { selectedPatient } = useSelector(state => state.patientSlice)
	const dispatch = useDispatch()

	const handleFormClear = () => {
		form.resetFields()
		setEditMode(false)
	}
	const handleFormSubmit = async (values) => {
		const { first_name, last_name } = splitFullName(values.full_name)

		const patient = {
			first_name,
			last_name,
			birth_year: values.birth_year,
			phone: values.phone,
			address: values.address
		}

		if (!editmode)
			await postPatient(patient)
				.then(res => {
					dispatch(insertPatient(res.data))
					form.resetFields()
				})
		else {
			patchPatient(selectedPatient.id, patient)
				.then(res => {
					dispatch(updatePatient(res.data))
				})
		}
	}

	useEffect(() => {
		if (selectedPatient) {
			form.setFieldsValue({
				...selectedPatient,
				full_name: `${selectedPatient.first_name} ${selectedPatient.last_name}`
			})
			setEditMode(true)
		}
	}, [selectedPatient])

	return (
		<div className="pr-2">
			<Form
				form={form}
				// labelCol={{ flex: '100px' }}
				size="small"
				// layout="vertical"
				onFinish={handleFormSubmit}
			>
				<Form.Item
					name="full_name"
					rules={[{ required: true }]}
					label="Họ Tên">
					<Input />
				</Form.Item>

				<Form.Item
					name="birth_year"
					rules={[{ required: true }]}
					label="Năm Sinh"
				>
					<InputNumber />
				</Form.Item>

				<Form.Item name="phone" label="Số Điện Thoại">
					<Input />
				</Form.Item>

				<Form.Item name="address" label="Địa Chỉ">
					<Input />
				</Form.Item>

				<Form.Item>
					<Space>
						<Button onClick={handleFormClear}>Clear</Button>
						<Button htmlType="submit" color="cyan" variant="solid">
							{!editmode ? 'Create' : 'Update'}
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</div>
	)
}

export default PatientForm