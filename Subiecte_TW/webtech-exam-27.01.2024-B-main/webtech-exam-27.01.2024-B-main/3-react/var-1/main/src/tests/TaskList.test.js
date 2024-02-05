import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import {within} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import App from '../components/App'

test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of tasks/i)
  expect(h1Element).not.toBeNull()
})

test('renders a task list', () => {
	render(<App />)
	const firstTask = screen.getByText(/task 1/)
	expect(firstTask).not.toBeNull()
})

test('low priority items are lightgreen', () => {
	render(<App />)
	const firstTask = screen.getByText(/task 2/)
	const style = getComputedStyle(firstTask)

	expect(style.backgroundColor).toBe('lightgreen')
})

test('by default task is not done', () => {
	render(<App />)
	const firstTask = screen.getByText(/task 2 not done/)
	expect(firstTask).not.toBeNull()
})

test('can toggle task completion', async () => {
	render(<App />)
	const task = screen.getByText(/task 1 not done/)
	const toggleButton = within(task).getByText(/toggle/)
	expect(toggleButton).not.toBeNull()
	await userEvent.click(toggleButton)
	expect(task.innerHTML).toMatch(/task 1 done/)
	await userEvent.click(toggleButton)
	expect(task.innerHTML).toMatch(/task 1 not done/)
})
