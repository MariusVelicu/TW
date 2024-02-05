// company.js

import { useState } from 'react'

const Company = (props) => {
	const { item, onSave, onEdit, onCancelEdit } = props
	const [name, setName] = useState(item.name)
	const [employees, setEmployees] = useState(item.employees)
	const [revenue, setRevenue] = useState(item.revenue)

	const handleSave = () => {
		onSave(item.id, {
			name,
			employees,
			revenue,
		})
	}

	if (item.isEditing) {
		return (
			<div>
				Name
				<input
					type="text"
					id="name"
					name="name"
					onChange={(evt) => setName(evt.target.value)}
					value={name}
				/>
				with
				<input
					type="text"
					id="employees"
					name="employees"
					onChange={(evt) => setEmployees(evt.target.value)}
					value={employees}
				/>
				employees
				<input
					type="text"
					id="revenue"
					name="revenue"
					onChange={(evt) => setRevenue(evt.target.value)}
					value={revenue}
				/>
				revenue
				<input type="button" value="save" onClick={handleSave} />
				<input type="button" value="cancel" onClick={() => onCancelEdit(item.id)} />
			</div>
		)
	} else {
		return (
			<div>
				Name {item.name} with {item.employees} employees {item.revenue} revenue
				<input type="button" value="edit" onClick={() => onEdit(item.id)} />
			</div>
		)
	}
}

export default Company
