import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuldControls/BuildControls'

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
        totalPrice: 4
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
        })
    }
    removeIngredientHandler = () => {}
    render() { 
        return ( 
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded ={this.addIngredientHandler}/>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;