class EmployeeStore {
	constructor(){
		this.items = [{
			id : 1,
			job : 'developer',
			name : 'tim',
			salary : 1000
		},{
			id : 2,
			job : 'accountant',
			name : 'tom',
			salary : 1500
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