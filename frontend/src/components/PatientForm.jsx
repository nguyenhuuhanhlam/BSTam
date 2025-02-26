import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, InputNumber, Space } from 'antd'
import { postPatient } from '../api'
import { splitFullName } from '../utils'
import { insertPatient } from '../slices/patient'
import { useEffect } from 'react'

const PatientForm = () => {
	const [form] = Form.useForm()
	const { selectedPatient } = useSelector(state => state.patientSlice)
	const dispatch = useDispatch()

	// if (selectedPatient)
	// 	form.setFieldsValue({
	// 		...selectedPatient,
	// 		full_name: `${selectedPatient.first_name} ${selectedPatient.last_name}`
	// 	})



	const handleFormSubmit = async (values) => {
		const { first_name, last_name } = splitFullName(values.full_name)

		const patient = {
			first_name,
			last_name,
			birth_year: values.birth_year,
			phone: values.phone,
			address: values.address
		}

		await postPatient(patient)
			.then(res => {
				dispatch(insertPatient(res.data))
				form.resetFields()
			})
	}

	useEffect(() => {
		if (selectedPatient)
			form.setFieldsValue({
				...selectedPatient,
				full_name: `${selectedPatient.first_name} ${selectedPatient.last_name}`
			})
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
						{/* <Button htmlType="submit">Clear</Button> */}
						<Button htmlType="submit">Create</Button>
					</Space>
				</Form.Item>
			</Form>
		</div>
	)
}

export default PatientForm