import React, {useState, useEffect} from 'react';
import './home.module.css';
import styles from './home.module.css'
import PinCard from "../../components/PinCard/pinCard.view";

const Home = () => {
    const[ count, setCount] = useState(0);
    const[countNegative, setCountNegative]= useState(0);


   useEffect(() => {
       console.log('Hooks')


       return true;

   },[])


    const suma = () => {
        console.log('sumando');
        setCount(count + 1);
        setCountNegative(countNegative -1)
    }

    const person = [
        {name:'facundo', email:'facu@test.com'},
        {name:'ligia', email:'ligia@test.com'},
        {name:'attila', email:'attila@test.com'},];

    return(
        <div className={styles.__home_container}>

            {person.map((person)=>{
                console.log(person);
                return(
                    <div>
                        <p>Name:{person.name}</p><br></br>
                        <p>Email:{person.email}</p>
                    </div>
                )
            })}

        </div>

    );
};

export default Home;