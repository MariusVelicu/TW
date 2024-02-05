// companylist.js

import { useState, useEffect } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

const store = new CompanyStore()

const CompanyList = () => {
	const [companies, setCompanies] = useState(store.getAll())

	const saveCompany = (id, company) => {
		store.saveOne(id, company)
		setCompanies(store.getAll())
	}

	const editCompany = (id) => {
		// Implementați funcția de editare a companiei
		const updatedCompanies = companies.map((company) => {
			if (company.id === id) {
				return { ...company, isEditing: true }
			} else {
				return company
			}
		})
		setCompanies(updatedCompanies)
	}

	const cancelEdit = (id) => {
		// Implementați funcția de anulare a editării
		const updatedCompanies = companies.map((company) => {
			if (company.id === id) {
				return { ...company, isEditing: false }
			} else {
				return company
			}
		})
		setCompanies(updatedCompanies)
	}

	return (
		<div>
			{companies.map((company) => (
				<Company
					key={company.id}
					item={company}
					onSave={saveCompany}
					onEdit={editCompany}
					onCancelEdit={cancelEdit}
				/>
			))}
		</div>
	)
}

export default CompanyList
