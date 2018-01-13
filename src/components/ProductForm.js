import React, { Component } from 'react'

class ProductForm extends Component {

    constructor() {
        super()

        this.state = {
            newProduct: {}
        }
    }

    handleNewProductChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newProduct = { ...this.state.newProduct }
        //Making a copy of the object we declared earlier in Product
        //the "..." is saying take the object you have and map each key, then save it to a newProduct, so you have a new fillable object
        //I need to make a whole new object because you can't change the contents of a pure function
        newProduct[attributeName] = attributeValue
        //The bracket syntax is allowing us to grab this particular key off of the object

        this.setState({ newProduct })
        //This will replace the old object with a new one
    }

    addNewProduct = (event) => {
        event.preventDefault()
        this.props.addNewProductToProductList(this.state.newProduct)
      }
      //Product form tells the highest tier that if it wants to change it, it needs to change it based on the functionality that it provides
    render() {
        return (
            <div>
                <form onSubmit={this.addNewProduct}>
                {/* Each name need to be the key of your object declared in your state initially, so that the inputs will align with that */}
                    <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                    <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><input type="submit" value="Create New Product" /></div>
                </form>
            </div>
        )
    }
}

export default ProductForm