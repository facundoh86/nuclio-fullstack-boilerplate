import React from 'react';
import PropTypes from 'prop-types';
import styles from './pinCardAction.module.css';

const PinCardAction = ({}) => {

    return(
        <div className={styles.__container}>

            <div className={styles.message}>I appear on hover</div>

        </div>
    );
}

PinCardAction.propTypes ={};

export default PinCardAction;