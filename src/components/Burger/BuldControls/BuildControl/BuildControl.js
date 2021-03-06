import React from 'react';
import classes from './BuildControl.module.css'

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
    
    <div></div>
        <div className={classes.label}>{props.label}</div>
        <button onClick={props.removed} className={classes.Less}>Less</button>
        <button onClick={props.added} className={classes.More}>More</button>
    </div>
)

export default BuildControl;