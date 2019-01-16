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
        {controls.map(mira => (
            console.log('mira', mira),
            <BuildControl added={() => props.ingredientAdded(mira.type)} key={mira.label} label={mira.label}/>
        ))}
        
    </div>
)

export default buildControls