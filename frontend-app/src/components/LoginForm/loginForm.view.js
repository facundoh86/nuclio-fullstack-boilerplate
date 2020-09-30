import React, {useState, useEffect} from 'react';
import {getToken, setToken, deleteToken,setJWT} from '../../utils/localStorage.utils';
import styles from './loginForm.module.css';

const LoginForm = () => {

    const [token, setToken] = useState({});
    const [reloadToken, setReloadToken] = useState(false);
    const [data, setData] = useState({
        "email":'',
        "password": 0,
    });



    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {
        const url = 'http://localhost/api/auth/login';
        const body ={
            email:data.email,
            password:data.password,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'

            }),
            mode: 'cors',
            body: JSON.stringify(body),
        }
        fetch(url, options)
            .then(response => {
                    if(response.status === 200){
                        setToken(response.access_token);
                        localStorage.setItem('token', token);
                    }
                    return Promise.reject(response.status);
                }
            )

    }

    useEffect(() => {
        const tokeLS = getToken();
    },[reloadToken]);

    const saveToken = () => {
        setJWT ('test Token');
        setReloadToken(!reloadToken);
    }

    const removeToken = () => {
        deleteToken('Token Deleted');
        setReloadToken(!reloadToken);
    }

    return(
      <div className={styles.__container}>
          <label >Email</label>
          <input type="text" name="email" id='email' onChange={handleInputChange}/>

          <label >Password </label>
          <input name="password"  type="password " id='password' onChange={handleInputChange}/>

          <input type="button" value="Inicia Sesion" onClick={submitForm}/>

      </div>
    );
}

export default LoginForm;