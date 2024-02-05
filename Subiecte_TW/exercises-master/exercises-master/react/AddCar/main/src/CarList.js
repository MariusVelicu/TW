import React from 'react';
import AddCar from './AddCar.js'
 

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
         	
    
      this.addCar = (car) => {
            var cars1=this.state.cars;
            cars1.push(car);
            this.setState=({
                cars:cars1
            })
        }
    }

    render(){
        return (
            <div>
            	 
				{
					<AddCar onAdd={this.addCar}/>
				
					
				}
				
            </div>
        )
    }
}