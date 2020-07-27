import React, {useState, useEffect} from 'react';

const LoginForm = () => {
    const[email, setEmail] =useState('')
    const [password, setPaswword] = useState('');



    const submitForm = () => {
        const url = 'http://localhost/api/login';
        const body = {
            password: 1234,
            email: "hola@hola.com",
        };
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',

            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then(response => {
                    if (response.status === 201) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                 console.log('saved');
                }
            )
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const url = 'http://localhost/api/login';

        const options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
        };
        fetch(url, options)
            .then(response => {
                    if (response.status >= 200 || response.status < 300) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    setToken(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);
    return(
        <div>
            <p>Name</p><input value={email} type={'text'}/>
            <p>Password</p><input value={password} type={'text'} />
            <p></p><input value="Submit" type="button" onClick={submitForm}/>

            <input type={'button'} onClick={saveToken} value={'SAVE TOKEN'}/>
            <input type={'button'} onClick={removeToken} value={'REMOVE TOKEN'}/>
        </div>
    )
}

export default LoginForm;