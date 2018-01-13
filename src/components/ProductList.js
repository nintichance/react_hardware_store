import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
    render() {
        const productList = this.props.productList

        console.log(productList)

        const productComponents = productList.map((product, index) => {
            return  <Product
            //this list received its data from Admin, which received its data from HomePage through JSX
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                index={index}
                deleteProductFromProductList={this.props.deleteProductFromProductList} 
                addItemToCart={this.props.addItemToCart}
                onAdmin={this.props.onAdmin}
                 />
        })

        return (
          
            <div>
                {productComponents}
            </div> 
        )

    }
}

export default ProductList