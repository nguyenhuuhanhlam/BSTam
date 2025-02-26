import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Button, Space } from 'antd'
import { getExaminationByPatient } from '../api'

const ExaminationTable = () => {
	const { selectedPatient } = useSelector(state => state.patientSlice)
	const [examinations, setExaminations] = useState([])

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => { }
	}

	const columns = [
		{
			key: 'date',
			title: 'Ngày Khám',
			dataIndex: 'date'
		},
		{
			key: 'diagnosis_note',
			title: 'Chẩn Đoán',
			dataIndex: 'diagnosis_note'
		},
		{
			key: 'prescription_note',
			title: 'Đơn Thuốc',
			dataIndex: 'prescription_note'
		},
		// {
		// 	key: 'action',
		// 	title: 'Action',
		// 	render: (_, record) => (
		// 		<Space size="middle">
		// 			<a>Chi Tiết</a>
		// 		</Space>
		// 	)
		// }
	]

	useEffect(() => {
		if (!selectedPatient) return

		getExaminationByPatient(selectedPatient.id)
			.then(res => {
				setExaminations(res.data)
			})
	}, [selectedPatient])

	return (
		<div className="p-4">
			<Table
				columns={columns}
				dataSource={examinations}
				rowKey="id"
				rowSelection={{ type: 'radio', ...rowSelection }}
				size="small"
			/>
		</div>
	)
}

export default ExaminationTable