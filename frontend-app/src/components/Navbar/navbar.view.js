import React from 'react';
import styles from './navbar.module.css';
import logodef from './logodef.png';
import {Link, link} from 'react-router-dom';
import {BOARD_FORM, HOME, LIST_PINS, LOGIN_FORM, REGISTER_FORM} from "../../Routes/Routes";

const Navbar = () => {

    return(

        <div className={styles.__container}>

               <img src={logodef} className={styles.__logo_img}/>
               
                <link to={HOME}>
                        <div className={styles.__button}>

                            <input type='button' className={styles.__input_button} value={'Inicio'} />

                        </div>
                </link>
                <Link to={LIST_PINS}>
                        <div className={styles.__button}>

                            <input type='button' className={styles.__input_button} value={'Lista de Pins'} />

                        </div>
                 </Link>
                <Link to={BOARD_FORM}>
                        <div className={styles.__button}>

                            <input type='button' className={styles.__input_button} value={'BoardForm'} />

                        </div>
                </Link>

            <div className={styles.__button}>

                <input  className={styles._search} type='search' placeholder="Search"/>


            </div>
                    <Link to={REGISTER_FORM}>
                        <div className={styles.__button__log}>
                             <input type='button' className={styles._login} value={'Registrarse'} />
                        </div>
                    </Link>

                    <Link to={LOGIN_FORM}>
                        <div className={styles.__button__log}>

                            <input type='button' className={styles._login} value={'Login'} />

                        </div>
                </Link>

        </div>


    );
}

export default Navbar;