import { useDispatch } from 'react-redux'
import { Button, Form, Input, InputNumber } from 'antd'
import { postPatient } from '../api'
import { splitFullName } from '../utils'
import { insertPatient } from '../slices/patient'

const PatientForm = () => {
	const [form] = Form.useForm()
	const dispatch = useDispatch()

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

	return (
		<div className="p-2">
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
					<Input />
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