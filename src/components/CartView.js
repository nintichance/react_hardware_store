import React, {Component} from 'react'
import CartList from './CartList'
//ternaries will replace if/else statements with a single condition
class CartView extends Component {
  render() {
    return (
        <div>
          <h1>Shopping Cart, Man</h1>
          <CartList cartList={this.props.cartList}
           deleteProductFromCartList = {this.props.deleteProductFromCartList}
          onShop={false} onAdmin={false} onCart={this.props.onCart}/>
          {/* // show our list of products here */}
       </div>
     )
  }
}

export default CartView