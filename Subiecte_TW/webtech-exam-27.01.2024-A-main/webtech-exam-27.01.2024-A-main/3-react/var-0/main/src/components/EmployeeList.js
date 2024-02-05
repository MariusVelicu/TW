import { useState, useEffect } from 'react'
import store from '../stores/EmployeeStore'
import Employee from './Employee'
import EmployeeForm from './EmployeeForm'

function EmployeeList () {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		setEmployees(store.getItems())
		store.emitter.addEventListener('UPDATE', () => {
			setEmployees([...store.getItems()])
		})
	}, [])

	const add = (item) => {
		store.addItem(item)
	}

	return (
		<div>	 
			<div>
				{
					employees.map((e, i) => 
						<Employee item={e} key={i} />
					)
				}
			</div>
			<EmployeeForm onAdd={add} />
		</div>
	)
}

export default EmployeeList
