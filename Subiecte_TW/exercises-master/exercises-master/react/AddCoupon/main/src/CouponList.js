import React from 'react';
import AddCoupon from './AddCoupon';


export class CouponList extends React.Component {
    constructor(){
        super();
        this.state = {
            coupons: []
        };
           this.addCoupon = (coupon) => {
            var coupons1=this.state.coupons;
            coupons1.push(coupon);
            this.setState=({
                coupons:coupons1
            })
        }
    }

    render(){
        return(
            <div>
            	<AddCoupon onAdd={this.addCoupon}/>
            </div>
        )
    }
}