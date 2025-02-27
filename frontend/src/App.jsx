import { Splitter } from 'antd'
import PatientForm from './components/PatientForm'
import PatientTable from './components/PatientTable'
import DetailsSection from './components/DetailsSection'
import './app.css'

const App = () => {
	return (
		<div className="p-2">
			<Splitter
				style={{
					// height: 'calc(100vh - 16px)',
					border: '1px dashed #bbb',
					borderRadius: '8px',
					padding: '16px',
				}}
			>
				<Splitter.Panel defaultSize="18%" resizable={false}>
					<PatientForm />
				</Splitter.Panel>
				<Splitter.Panel>
					<PatientTable />
					<div className="py-2"/>
					<DetailsSection />
				</Splitter.Panel>
			</Splitter>
		</div>
	)
}

export default App
