import React,{useState, useEffect} from 'react';
import styles from './pinsform.module.css';

const PinsForm = () => {

    const [note, setNote] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [boardId, setBoardId] = useState();

    const[boards, setBoards] = useState([]);


    const handleChangeNote= (event) => {
        setNote(event.target.value);
    }

    const handleChangeMediaUrl = ( event) => {
        setMediaUrl(event.target.value);

    }

    const handleChangeBoardId= ( event) => {
        setBoardId(event.target.value);

    }

    const submitForm = () => {
        const url = 'http://localhost/api/pins';
        const body = {
            note,
            media_url: mediaUrl,
            board_id: boardId,

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
                    if(response.status === 201){
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then (() => {
                console.log('saved')
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const url = 'http://localhost/api/boards';

        const options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
        };
        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((data) => {
                setBoards(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
        <div className={styles.__container}>

            <label className={styles.__label}>Note </label>
            <input type={"text"} value={note}  className={styles.__input} onChange={handleChangeNote}/>

            <label className={styles.__label}>Media_url</label>
            <input type={"text"} value={mediaUrl} className={styles.__input} onChange={handleChangeMediaUrl}/>

            <select  className={styles.__button} onChange={handleChangeBoardId}>

                {boards.map((board) => {
                    return (<option key={'board-select ${board.id}'}  value={board.id}> {board.name}  </option>)
                    })
                }

            </select>

            <input type={"button"} value={"submit"} className={styles.__button} onClick={submitForm}/>

        </div>

    );
};

export default PinsForm;


