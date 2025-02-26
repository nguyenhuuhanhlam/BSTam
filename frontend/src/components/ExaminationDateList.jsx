import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button, Space } from 'antd'
import { getExaminationByPatient } from '../api'
import { setSelectedExamination } from '../slices/examination'

const ExaminationDateList = () => {
	const { selectedPatient } = useSelector(state => state.patientSlice)
	const dispatch = useDispatch()
	const [examinations, setExaminations] = useState([])

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			dispatch(setSelectedExamination(selectedRows[0]))
		}
	}

	const columns = [
		{
			key: 'date',
			title: 'Ngày Khám',
			dataIndex: 'date'
		}
	]

	useEffect(() => {
		if (!selectedPatient) return

		getExaminationByPatient(selectedPatient.id)
			.then(res => {
				setExaminations(res.data)
			})
	}, [selectedPatient])

	return (
		<div className="pr-2">
			<Table
				pagination={false}
				columns={columns}
				dataSource={examinations}
				rowKey="id"
				rowSelection={{ type: 'radio', ...rowSelection }}
				size="small"
			/>
		</div>
	)
}

export default ExaminationDateList