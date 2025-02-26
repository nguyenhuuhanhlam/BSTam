import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { setPatients as dispatchPatients, setSelectedPatient } from '../slices/patient'
import { getAllPatients } from '../api'

const PatientTable = () => {
	const [searchText, setSearchText] = useState('')
	const [searchedColumn, setSearchedColumn] = useState('')
	const { patients } = useSelector(state => state.patientSlice)
	const dispatch = useDispatch()
	const searchInput = useRef(null)

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			dispatch(setSelectedPatient(selectedRows[0]))
		}
	}
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setSearchText(selectedKeys[0])
		setSearchedColumn(dataIndex)
	}

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
				style={{ padding: 8 }}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ marginBottom: 8, display: 'block' }}
				/>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		filterDropdownProps: {
			onOpenChange(open) {
				if (open) {
					setTimeout(() => searchInput.current.select(), 100)
				}
			}
		}
	})

	const columns = [
		{
			title: 'Họ',
			dataIndex: 'first_name',
			...getColumnSearchProps('first_name')
		},
		{
			title: 'Tên',
			dataIndex: 'last_name',
			...getColumnSearchProps('last_name')
		},
		{ title: 'Năm Sinh', dataIndex: 'birth_year' },
		{ title: 'Phone', dataIndex: 'phone' },
	]


	useEffect(() => {
		getAllPatients()
			.then((res) => {
				dispatch(dispatchPatients(res.data))
			})
	}, [])

	return (
		<div className="p-2">
			<Table
				columns={columns}
				dataSource={patients}
				rowSelection={{ type: 'radio', ...rowSelection }}
				pagination={false}
				rowKey="id"
				size="small"
				scroll={{ y: 48 * 4 }}
			/>
		</div>
	)
}

export default PatientTable