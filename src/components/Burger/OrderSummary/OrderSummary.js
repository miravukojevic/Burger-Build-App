import React from 'react';
import Aux from '../../../hoc/Miux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with folowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue for Chckout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaceContinuled}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;