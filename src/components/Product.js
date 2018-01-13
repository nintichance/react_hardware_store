import React, { Component } from 'react'

class Product extends Component {

    deleteProduct = () => {
        this.props.deleteProductFromProductList(this.props.index)
    }
    addItemToCart = () => {
        this.props.addItemToCart(this.props.index)
    }
    render() {
        const productName = this.props.productName
        const description = this.props.description
        const price = this.props.price

        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                {this.props.onAdmin ? <button onClick={this.deleteProduct}>
                    Delete {productName}
                </button>
                    : null
                }
                 {this.props.onAdmin ? 
                    null : <button onClick={this.addItemToCart}> Add {productName} to Cart</button>
                }
            </div>

        )
    }
}

export default Product