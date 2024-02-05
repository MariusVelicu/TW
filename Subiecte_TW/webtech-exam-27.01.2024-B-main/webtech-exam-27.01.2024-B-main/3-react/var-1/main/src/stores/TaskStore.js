class EmployeeStore {
	constructor(){
		this.items = [{
			id: 1,
			description: 'task 1',
			priority: 'high'		
		},{
			id: 2,
			description: 'task 2',
			priority: 'low'		
		}]
		this.emitter = new EventTarget()
	}

	addItem(r){
		let maxId = this.items.map((e) => e.id).reduce((a, e) => a > e ? a : e, 1)
		const item = {...r, id: maxId + 1}
		this.items.push(item)
		this.emitter.dispatchEvent(new Event('UPDATE'))
	}

	getItems(){
		return this.items
	}
}

const store = new EmployeeStore()

export default store