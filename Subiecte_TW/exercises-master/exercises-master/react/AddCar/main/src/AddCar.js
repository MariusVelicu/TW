import React from 'react';

export class AddCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            price: ''
        }
        
    }

    addCar = () => {
        let car = {
            make: this.state.make,
            model: this.state.model,
            price: this.state.price
        };
        this.props.onAdd(car);
    
    }
    handleChangeModel=(event)=>{
        this.setState({
            model:event.target.value
        });
    }
     handleChangePrice=(event)=>{
        this.setState({
            price:event.target.value
        });
    }
     handleChangeMake=(event)=>{
        this.setState({
            make:event.target.value
        });
    }
    render(){
        return (
            <div>
                <input id="make"  name="make" onChange={this.handleChangeMake} />
                 <input id="model"  name="model" onChange={this.handleChangeModel} />
                 <input id="price"  name="price" onChange={this.handleChangePrice}/>
                 <input type="button" value="add car" onClick={this.addCar}/>
            </div>
        )
    }
}
export default AddCar;