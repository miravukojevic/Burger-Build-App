import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import myFunctions from '../../utils/heleper';

const layout = (props) => {

    console.log('MY FUNCTIONS', myFunctions);


    const { addNumbers, substractNumbers, multiNumbers } = myFunctions;

    return (
        <>
            <Aux>
                <div>Toolbar, SIdeDrawsr, Backdrop</div>
                <main className={classes.content}>
                    {props.children}
                </main>
               
            </Aux>
        </>
    );
}

export default layout;