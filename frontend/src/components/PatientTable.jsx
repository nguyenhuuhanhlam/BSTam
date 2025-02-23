import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'antd'
import { setPatients as dispatchPatients } from '../slices/patient'
import { getAllPatients } from '../api'

const PatientTable = () => {
	const [patients, setPatients] = useState([])
	const columns = [
		{ key: 'id', title: 'ID', dataIndex: 'id' },
		{ title: 'Họ', dataIndex: 'first_name' },
		{ title: 'Tên', dataIndex: 'last_name' },
		{ title: 'Tuổi', dataIndex: 'age' },
	]
	const dispatch = useDispatch()

	useEffect(() => {
		getAllPatients()
			.then((res) => {
				dispatch(dispatchPatients(res.data))
				setPatients(res.data)
			})
	}, [])

	return (
		<div className="p-4">
			<Table columns={columns} dataSource={patients} rowKey="id" />
		</div>
	)
}

export default PatientTable