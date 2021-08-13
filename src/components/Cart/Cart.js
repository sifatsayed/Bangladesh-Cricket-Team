import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary ;
    }
    return (
        <div>
           <h5 className="text-primary">TotalNumber of Player : {cart.length}</h5>
           <h6 className="text-danger">Total Player Salary : {totalSalary}</h6>
        </div>
    );
};

export default Cart;