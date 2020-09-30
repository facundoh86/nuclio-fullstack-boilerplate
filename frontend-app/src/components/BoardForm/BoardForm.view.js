import React, {useState} from 'react';
import styles from './BoardForm.module.css';

const BoardForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeDescription= ( event) => {
        setDescription(event.target.value);

    }

        const handleChangeUserId = (event) => {
        setUserId(event.target.value);
    }

    const submitForm = () => {
        const url = 'http://localhost/api/boards';
        const body ={
            name,
            description: description,
            user_id: userId,

        };
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content_type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.body(body),
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
        <div className={styles.__container}>
            <label for="note-form">Name</label>
          <input type="text" value={name} className={styles.input} onChange={handleChangeName}/>
            <label for="note-form">Description </label>
          <input type="text" value={description} className={styles.input}  onChange={handleChangeDescription}/>
            <label for="note-form">User_Id: </label>
          <input type="number" value={userId} className={styles.input}  onChange={handleChangeUserId}/>
          <input type="submit" value="submit" onChange={submitForm}/>

        </div>

    );

}

export default BoardForm;