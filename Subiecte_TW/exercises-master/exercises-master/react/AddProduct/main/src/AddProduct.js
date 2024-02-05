import React from 'react';

export class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
       this.handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }
    

     render(){
        return <div>
            <input id="name" name="name" onChange={this.handleChange} />
            <input id="category" name="category" onChange={this.handleChange} />
             <input id="price" name="price" onChange={this.handleChange} />
           
             <input type="button"  value="add product" onClick={() => this.props.onAdd({
              name : this.state.name,
              category : this.state.category,
              price : this.state.price,
             
            })} />
        </div>
    }
}
export default AddProduct;