
import React, { Component } from 'react'
import Cart from './Cart'

class CartList extends Component {
    render() {
        const cartList = this.props.cartList

        console.log(cartList)


        const cartComponents = cartList.map((cart, index) => {
            return <Cart
                productName={cart.productName}
                description={cart.description}
                price={cart.price}
                key={index}
                index={index}
                deleteProductFromCartList = {this.props.deleteProductFromCartList}
            />
        })

        return (

            <div>
                {cartComponents}
            </div>
        )

    }
}

export default CartList











