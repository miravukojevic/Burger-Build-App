import React from 'react';
import Aux from '../../hoc/Miux';
import classes from './Layout.module.css';
import myFunctions from '../../utils/heleper';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {

    console.log('MY FUNCTIONS', myFunctions);


    const { addNumbers, substractNumbers, multiNumbers } = myFunctions;

    return (
        <>
            <Aux>
                <Toolbar />
                <main className={classes.content}>
                    {props.children}
                </main>
               
            </Aux>
        </>
    );
}

export default layout;