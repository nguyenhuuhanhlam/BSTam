import { Splitter, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ExaminationDateList from './ExaminationDateList'
import ExaminationDiagnosis from './ExaminationDiagnosis'
import ExaminationPrescription from './ExaminationPrescription'

const DetailsSection = () => {
	return (
		<>
			<div className="flex pl-2">
				<Button
					size="small"
					type="primary"
					icon={<PlusOutlined />}
				>
					Thêm
				</Button>
			</div>

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
		</>
	)
}

export default DetailsSection