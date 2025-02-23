import { Button, Checkbox, Form, Input, InputNumber, Space } from 'antd'
import { postPatient } from '../api'

const PatientForm = () => {

	const handleFormSubmit = async (values) => {
		console.log(values)
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