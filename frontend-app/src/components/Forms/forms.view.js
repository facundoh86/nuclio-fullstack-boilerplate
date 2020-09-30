import React, {useState} from "react";
import styles from './forms.module.css';

const Forms = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeEmail = ( event) => {
        setEmail(event.target.value);

    }

    const submitForm = () => {
        const url = 'http://localhost:8000/v1/api/profile';
        const body ={
            name : 'Facundo',
            email: 'facundo@facun.com',
        };
        const options = {
            method: 'Post',
            headers: new Headers(),
            body: body,
        }
        fetch(url, options)
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }
                    return Promise.reject(response.status);
        }
        )
            .then (data => {
                console.log('saved')
            })
            .catch(error => console.log(error));
    }

    return(
        <div>

            <input type="text" value={name} onChange={handleChangeName}/>
            <input type="text" value={email} onChange={handleChangeEmail}/>
            <input type="submit" value="submit" onChange={submitForm}/>

        </div>

    );
};

export default Forms;
