import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { Table } from 'antd'
import { getExaminationByPatient } from '../api'
import { setSelectedExamination } from '../slices/examination'

const ExaminationDateList = () => {
	const { selectedPatient } = useSelector(state => state.patientSlice)
	const dispatch = useDispatch()
	const [examinations, setExaminations] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const rowSelection = {
		selectedRowKeys,
		onChange: (selectedRowKeys, selectedRows) => {
			setSelectedRowKeys(selectedRowKeys)
			dispatch(setSelectedExamination(selectedRows[0]))
		}
	}

	const columns = [{
		key: 'date',
		title: 'Ngày Khám',
		dataIndex: 'date',
		render: e => format(new Date(e), 'dd-MM-yyyy')
	}]

	useEffect(() => {
		if (!selectedPatient) return

		getExaminationByPatient(selectedPatient.id)
			.then(res => {
				setExaminations(res.data)
				setSelectedRowKeys([])
				dispatch(setSelectedExamination(null))
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