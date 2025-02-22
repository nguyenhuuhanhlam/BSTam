import { Button, Checkbox, Form, Input, Space } from 'antd'

const PatientForm = () => {
	return (
		<div className="p-4">
			<Form>
				<Form.Item label="Họ Tên">
					<Input />
				</Form.Item>

				<Form.Item label="Tuổi">
					<Input />
				</Form.Item>

				<Form.Item label="Số Điện Thoại">
					<Input />
				</Form.Item>

				<Form.Item label="Địa Chỉ">
					<Input />
				</Form.Item>

				<Form.Item>
					<Button>Submit</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default PatientForm