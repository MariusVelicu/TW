import React from 'react';

export class AddCoupon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            discount: '',
            availability: ''
        };
        
        
    }
  handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    addCoupon = () => {
        let coupon = {
            category: this.state.category,
            discount: this.state.discount,
            availability: this.state.availability
        };
        this.props.onAdd(coupon);
    }

    render(){
        return(
            <div>
               <input id="category" name="category" onChange={this.handleChange} />
            <input id="discount" name="discount" onChange={this.handleChange} />
             <input id="availability" name="availability" onChange={this.handleChange} />
             
             <input type="button"  value="add coupon" onClick={this.addCoupon} />
       
            </div>
        )
    }
}
export default AddCoupon;