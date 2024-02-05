import React from 'react';
import AddProduct from './AddProduct';

export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
         this.add = (product) => {
            this.store.addProduct(product);
        }
        
    }

    render(){
        return(
            <div>
             <AddProduct onAdd={this.add} />
            </div>
        )
    }
}