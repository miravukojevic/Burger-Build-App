import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuldControls/BuildControls';
import Modal  from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = { 
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
     }

     updatePurchaseState = (ingredients) => {
         const sum = Object.keys(ingredients).map(igKey => {
             return ingredients[igKey]
         }).reduce((sum, el) => {
             return sum + el
         }, 0);
         console.log(sum, 'sum')
         this.setState({purchasable: sum>0})
     }

    addIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES [type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        console.log('updatedCount', updatedCount, 'updateIngredients ', updateIngredients)
        console.log('priceAddition', priceAddition, 'oldPrice ', oldPrice)
        console.log('newPrice', newPrice)
        this.setState ({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return false;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDediction = INGREDIENT_PRICES [type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDediction;

        this.setState ({
            totalPrice: newPrice,
            ingredients: updateIngredients
        })
        this.updatePurchaseState(updateIngredients);
    }
purchaseHandler = () => {
    this.setState({
        purchasing: true
    })
}
purchaseCancelHandler = () => {
    this.setState({
        purchasing: false
    })
}
 purchaseContinueHandler= () => {

 }
    render() { 
        const disabledInfo = {
            ...this.state.ingredients
        }
        return ( 
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary purchaseCanceled={this.purchaseCancelHandler} purchaceContinuled={this.purchaseContinueHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded ={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} price={this.state.totalPrice} ordered={this.purchaseHandler} purchasable={this.state.purchasable}/>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;