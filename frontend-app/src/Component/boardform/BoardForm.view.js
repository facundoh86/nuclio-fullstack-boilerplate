import React, {useState} from 'react';

const BoardForm = () => {
    const [name, setName]= useState('')
    const [description, setDescription]= useState('')
    const [userId, setUserId]= useState('')

    const handleChangeName = (e) => {
       setName(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeUserID = (e) => {
        setUserId(e.target.value)
    }

    const submitForm = () => {
        const url = 'http://localhost/api/boards'
        const body = {
            name: name,
            description: description,
            userId: userId,
        };
        const options = {
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject(response.status);
            }

        )

            .then(payload => {
                console.log("saved");
            }

            )
            .catch(error => console.log(error));
    }


    return(
        <div>
            <p> CREATE BORD FORM</p>
            <p>Name</p><input value={name} type='text' onChange={handleChangeName}/>
            <p>Description</p><input value={description} type='text' onChange={handleChangeDescription}/>
            <p>User ID</p><input value={userId} type='text' onChange={handleChangeUserID}/>
            <p></p><input value="Submit" type="button" onClick={submitForm}/>
        </div>
    );
};

export default BoardForm;