import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of employees/i)
  expect(h1Element).not.toBeNull()
})

test('renders an employee list', () => {
	render(<App />)
	const addButton = screen.getByText('add')
	expect(addButton).not.toBeNull()
})

test('form does not add an empty record record', () => {
	const { container } = render(<App />)
	const addButton = screen.getByText('add')
	expect(addButton).not.toBeNull()
	act(() => {
		addButton.click()
	})
	const records = [].slice.call(container.getElementsByClassName('employee'))
	expect(records.length).toBe(2)
	const lastRecord = records.pop()
	expect(lastRecord.innerHTML).toBe('tom accountant 1500')
})

test('form adds an full record', () => {
	const { container } = render(<App />)
	const addButton = screen.getByText('add')
	const typeInput = screen.getByPlaceholderText('name')
	fireEvent.change(typeInput, { target: { value: 'jim' }})
	const nameInput = screen.getByPlaceholderText('job')
	fireEvent.change(nameInput, { target: { value: 'developer' }})
	const massInput = screen.getByPlaceholderText('salary')
	fireEvent.change(massInput, { target: { value: 1100 }})
	expect(addButton).not.toBeNull()
	act(() => {
		addButton.click()
	})
	const records = [].slice.call(container.getElementsByClassName('employee'))
	expect(records.length).toBe(3)
	const lastRecord = records.pop()
	expect(lastRecord.innerHTML).toBe('jim developer 1100')
})

test('enforces conditions on salary',  () => {
	const { container } = render(<App />)
	const addButton = screen.getByText('add')
	const typeInput = screen.getByPlaceholderText('name')
	fireEvent.change(typeInput, { target: { value: 'ann' }})
	const nameInput = screen.getByPlaceholderText('job')
	fireEvent.change(nameInput, { target: { value: 'accountant' }})
	const massInput = screen.getByPlaceholderText('salary')
	// invalid, value is not a number
	fireEvent.change(massInput, { target: { value: 'abc' }})
	expect(addButton).toBeDisabled()
	// invalid, value is under 1000
	fireEvent.change(massInput, { target: { value: 900 }})
	expect(addButton).toBeDisabled()
	// valid
	fireEvent.change(massInput, { target: { value: 1100 }})
	expect(addButton).not.toBeDisabled()
	act(() => {
		addButton.click()
	})
	const records = [].slice.call(container.getElementsByClassName('employee'))
	expect(records.length).toBe(4)
	const lastRecord = records.pop()
	expect(lastRecord.innerHTML).toBe('ann accountant 1100')
})
