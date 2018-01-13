import React, { Component } from 'react'

class Cart extends Component {
    deleteCartProduct = () => {
        this.props.deleteProductFromCartList(this.props.index)
    }

    render() {
        const productName = this.props.productName
        const description = this.props.description
        const price = this.props.price

        return (
            <div>
                <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                <button onClick={this.deleteCartProduct}>
                    Delete {productName}
                </button>
                </div>
            </div>

        )
    }
}

export default Cart