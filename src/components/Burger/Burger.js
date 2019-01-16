import React from 'react';

import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediants/Burgeringreadiant'

const burger = (props) => {
    let transformedIngrediaents = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return (
                 <BurgerIngrediant key={igKey + i} type={igKey}/>
            ) 
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    });

    if (transformedIngrediaents.length === 0){
        transformedIngrediaents = <p>Please start adding ingrediants</p>
    }
    console.log( 'transformedIngrediaents', transformedIngrediaents)
    console.log( Object.keys(props.ingredients))
    return(
         <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
            {transformedIngrediaents}
            <BurgerIngrediant type="bread-bottom"/>
         </div>
    )
}

export default burger;