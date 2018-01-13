import React, {Component} from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'

class AdminView extends Component {

  render() {
    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
          <ProductForm />
          <ProductList productList={this.props.productList}
          deleteProductFromProductList={this.props.deleteProductFromProductList}
          onAdmin={true}
           />
          {/* // show our list of products here */}
          <h2>Create a New Product</h2>
          <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}
          />
          {/* // create product form goes here */}
        </div>
    )
  }
}

export default AdminView