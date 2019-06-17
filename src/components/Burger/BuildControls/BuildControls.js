import React from 'react';
import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price : &#8377; <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                added={() => {props.ingredientAdded(ctrl.type)} }
                removed={() => {props.ingredientRemoved(ctrl.type)}}
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={styles.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;