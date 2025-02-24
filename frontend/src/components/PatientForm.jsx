import { useDispatch } from 'react-redux'
import { Button, Form, Input, InputNumber } from 'antd'
import { postPatient } from '../api'
import { splitFullName } from '../utils'
import { insertPatient } from '../slices/patient'

const PatientForm = () => {
	const dispatch = useDispatch()

	const handleFormSubmit = async (values) => {
		const { first_name, last_name } = splitFullName(values.full_name)

		const patient = {
			first_name,
			last_name,
			age: values.age,
			phone: values.phone,
			address: values.address
		}

		await postPatient(patient)
			.then(res => {
				
				dispatch(insertPatient(res.data))
			})
	}

	return (
		<div className="p-4">
			<Form
				labelCol={{ flex: '100px' }}
				layout="horizontal"
				onFinish={handleFormSubmit}
			>
				<Form.Item
					name="full_name"
					rules={[{ required: true }]}
					label="Họ Tên">
					<Input />
				</Form.Item>

				<Form.Item
					name="age"
					rules={[{ required: true }]}
					label="Tuổi"
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
					<Button htmlType="submit">Submit</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default PatientForm