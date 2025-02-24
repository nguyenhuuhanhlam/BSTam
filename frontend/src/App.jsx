import { Splitter } from 'antd'
import PatientForm from './components/PatientForm'
import PatientTable from './components/PatientTable'
import './app.css'

const App = () => {
	return (
		<div>
			<Splitter
				style={{
					width: 1280,
					height: 640,
					boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
				}}
			>
				<Splitter.Panel defaultSize="25%" collapsible max="50%">
					<PatientForm />
				</Splitter.Panel>
				<Splitter.Panel>
					<PatientTable />
				</Splitter.Panel>
			</Splitter>
		</div>
	)
}

export default App
