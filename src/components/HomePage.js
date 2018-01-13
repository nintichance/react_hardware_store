import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
    //constructor is the first method stylistically inside your class
    constructor() {
        //the constructor constructs an object
        super()
        //super() calls the constructor of the parent class (or of component)
        // it is going to make this.state. By default, all react components have this
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            //editSaleItem is a boolean that says, if the conditions are true, show something
            productList: [
                {
                    //Here we are storing the state "productList" and handing it to AdminView so that it can be mapped through
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                },
                {
                    productName: 'Jean',
                    description: 'Itsa jean',
                    price: 100000000000,
                },
                {
                    productName: 'Jean',
                    description: 'Itsa jean',
                    price: 100000000000,
                }

            ],
            cartList: [],
            onAdmin: true,
            onShop: true,
            onCart: true
        }
    }
    //When our state changes, we hope that the component will automatically update
    //Why is toggleEditSaleItem not declared by const?
    //JS does not have definiable variables in a class
    toggleEditSaleItem = () => {
        //this is new JS syntax saying, create a method() on this class called toggleEditSaleItem
        //this is our first custom method
        const editSaleItem = !this.state.editSaleItem
        //this says, make a new variable that is the opposite of whatever the current value of this state is
        this.setState({ editSaleItem })
        //then we introduce a really important method called .setState, which will go in and change the value for you, without changing the object itself,
        //but replacing the entire object itself
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        //When something changes on this input, the value of the input is what we care about
        //Everytime this input changes, grab the value in the input box and then replace the value in the object.
        //We need to tell React what to do as they won't let you replace a value untl you tell it.
        this.setState({ itemCurrentlyOnSale })
    }

    addNewProductToProductList = (newProduct) => {
        //Take in a newProduct
        const productList = [...this.state.productList]
        //"..." is the spread operator
        //Make a copy of productList
        productList.push(newProduct)
        //Push something to this list, making a new product list object
        this.setState({productList})
        //Set the new state and replace it with a new state so it can be handed off
        //Remember you can check to see if your function works in React dev tools "$r.deleteProductFromProductList(i)"
    }
    deleteProductFromProductList = (index) => {
    //Two parameters, which is the index of the one we need to delete or, more easily, the id
    //This is another custom function
    const productList = [...this.state.productList]
    //Again, we will use the method spread in order to make a copy of the old object
    productList.splice(index, 1)
    //We will remove that particular thing from the object
    this.setState({productList})
    //Update/set the new state
    }

    deleteProductFromCartList = (index) => {
        const cartList = [...this.state.cartList]
        cartList.splice(index, 1)
        this.setState({cartList})
    }

    addItemToCart = (index) => {
        const product = {...this.state.productList[index]}
        const cartList = [...this.state.cartList]
    
        cartList.push(product)
    
        this.setState({cartList})
    }
   
    render() {

        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                        </button>
                    </span>
                    {
                        this.state.editSaleItem ?
                            <div>
                                <input
                                    onChange={this.handleItemCurrentlyOnSaleChange}
                                    //If you need to change something on an input, you have to control it by putting "onChange"
                                    //In order for an input to be a controlled input, you need a function that listens to a change in state
                                    //when it changes, call the function we declared earlier
                                    //everytime I type 1 letter, the state will automatically and very quickly change to reflect that action
                                    //the change is unilateral, it only changes in one direction. On the screen and then in the state
                                    value={this.state.itemCurrentlyOnSale}
                                    //the new value was grabbed and updated
                                    type="text" />
                            </div>
                            : null
                    }
                    {this.state.onAdmin ? <AdminView productList={this.state.productList} 
                    addNewProductToProductList={this.addNewProductToProductList}
                    deleteProductFromProductList={this.deleteProductFromProductList}
                    addItemToCart = {this.addItemToCart} onCart={false} onShop={false}
                    onAdmin={true}/> : null }

                    {this.state.onShop ? <ShopView productList={this.state.productList}
                    addItemToCart={this.addItemToCart} onAdmin={false} onCart={false} onShop={true}/> : null}

                    {this.state.onShop ? <CartView productList={this.state.productList}
                    cartList={this.state.cartList} deleteProductFromCartList = {this.deleteProductFromCartList}
                     onAdmin={false} onShop={false} onCart={true}/> : null}
                </div>
            </div> 
        )
    }
}

export default HomePage

  //What we did
  //Added state to our component by making a constructor
  //Must inherit the methods of the parent component by adding the super() method
  //this two ternary statements determie wheter something is showing or not: { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
  //button onClick, be sure to leave toggleEditSaleItem without () so you're not just calling it once
  //We need to turn the input into something called a controlled input
  //When we change the value in the input, we also need to be able to replace the state 
  //React needs to be able to tell the box how to take the input and replace the state with a new one
  //Whatever I put in this box will be reflected in the component on the screen
  //"this" refers to the class
  //When you call this.setState, you are replacing the state with a new state and the entire component will re-render
  //{this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'} If it is true, the inner html will be 'hide', otherwise it will be 'edit sale item'

