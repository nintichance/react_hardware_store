import React, {Component} from 'react'
import ProductList from './ProductList'

class ShopView extends Component {
  render() {
    return (
        <div>
          <h1>Welcome to Hardware Store</h1>
          <h2>Products</h2>
          <ProductList productList={this.props.productList}
          addItemToCart={this.props.addItemToCart}
          onAdmin={false}/>
          {/* // show our list of products here */}
       </div>
     )
  }
}

export default ShopView