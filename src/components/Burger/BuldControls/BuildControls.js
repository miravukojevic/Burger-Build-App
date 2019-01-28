import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price: {props.price}</p>
        {controls.map(mira => (
            console.log('mira', mira),
            <BuildControl added={() => props.ingredientAdded(mira.type)} key={mira.label} removed={() => props.ingredientRemoved(mira.type)}label={mira.label} />
        ))}

        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        
    </div>
)

export default buildControls