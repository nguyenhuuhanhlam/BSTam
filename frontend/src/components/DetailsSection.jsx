import { Splitter, Button, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ExaminationDateList from './ExaminationDateList'
import ExaminationDiagnosis from './ExaminationDiagnosis'
import ExaminationPrescription from './ExaminationPrescription'

const DetailsSection = () => {
	return (
		<div>
			<Space>
				<Button
					size="small"
					icon={<PlusOutlined />}
				>
					Thêm
				</Button>
			</Space>

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
		</div>
	)
}

export default DetailsSection