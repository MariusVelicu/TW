import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of employees/i)
  expect(h1Element).not.toBeNull()
})

test('renders an task list with select buttons', () => {
	render(<App />)
	const tasks = screen.getAllByText(/select/)
	expect(tasks.length).toBe(2)
})

test('form is not displayed if nothing is selected',  () => {
	render(<App />)
	const saveButton = screen.queryByText(/save/)
	expect(saveButton).toBeNull()
})

test('can select a record', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const description = screen.getByDisplayValue('task 1')
	expect(description).not.toBeNull()
	const priority = screen.getByDisplayValue('high')
	expect(priority).not.toBeNull()
})

test('can modify a record description', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const descriptionInput = screen.getByDisplayValue('task 1')
	fireEvent.change(descriptionInput, { target: { value: 'task 3' }})
	const saveButton = screen.getByDisplayValue('save')
	act(() => {
		saveButton.click()
	})
	const savedDescription = screen.getByText(/task 3/)
	expect(savedDescription).not.toBeNull()
})

