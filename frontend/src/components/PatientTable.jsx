import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'antd'
import { getAllPatients } from '../api'

const PatientTable = () => {
	const [patients, setPatients] = useState([])
	const columns = [
		{ key: 'id', title: 'ID', dataIndex: 'id' },
		{ title: 'Họ', dataIndex: 'first_name' },
		{ title: 'Tên', dataIndex: 'last_name' },
		{ title: 'Tuổi', dataIndex: 'age' },
	]

	useEffect(() => {
		getAllPatients()
			.then((res) => {
				setPatients(res.data)

			})
	}, [])

	return (
		<div className="p-4">
			<Table columns={columns} dataSource={patients} />
		</div>
	)
}

export default PatientTable