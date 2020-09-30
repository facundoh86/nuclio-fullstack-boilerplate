import React, {useState} from 'react';
import styles from './pinCard.module.css';
import PropTypes from 'prop-types';
import PinCardAction from "./pinCardActions/pinCardAction.view";

const PinCard = ({note, media_url , name }) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className={styles.__container}
             onMouseEnter={()=>setIsHovered(true)}
             onMouseLeave={()=>setIsHovered(false)}>

            <div className={styles.__image__container}>

            <img src={media_url} className={styles.__image} alt="PinImage"/>
                {isHovered && <PinCardAction/>}

            <span className={styles.__pinName}>{name}</span><br></br>
            <span className={styles.__pinNote}>{note}</span>


            </div>
        </div>

    )
};

PinCard.propTypes={
    note:PropTypes.string.isRequired,
    media_url:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

}

export  default PinCard;
