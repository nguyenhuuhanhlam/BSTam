import { Splitter } from 'antd'
import './App.css'
import PatientForm from './components/PatientForm'

const App = () => {
	return (
		<div className="App">
			<Splitter
				style={{
					width: 1280,
					height: 640,
					boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
				}}
			>
				<Splitter.Panel defaultSize="30%" collapsible max="50%">
					<PatientForm />
				</Splitter.Panel>
				<Splitter.Panel>
      			<div className="p-4">Second.</div>
    			</Splitter.Panel>
			</Splitter>
		</div>
	)
}

export default App
