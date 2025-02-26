import { Button, Space } from 'antd'
import { PlusOutlined, EyeOutlined } from '@ant-design/icons'
import ExaminationTable from './ExaminationTable'

const DetailsSection = () => {
	return (
		<div className="details-section">
			<Space>
				<Button
					size="small"
					type="primary"
					icon={<PlusOutlined />}
				>
					Thêm
				</Button>

				<Button
					size="small"
					type="primary"
					icon={<EyeOutlined />}
				>
					Chi Tiết
				</Button>
			</Space>
			<ExaminationTable />
		</div>
	)
}

export default DetailsSection