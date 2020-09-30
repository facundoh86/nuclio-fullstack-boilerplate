import React, {useState, useEffect} from 'react';
import styles from './ListPins.module.css';
import PinCard from "../PinCard/pinCard.view";

const ListPins = () => {

    const [pins, setPins] = useState([])

    useEffect(() => {
        const url = "http://localhost/api/pins";
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response =>{
                if (response.status === 200){
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(data => {
                console.log('Saved');
                setPins(data);
            })
            .catch(error => console.log(error));
    },[])



    return(
      <div className={styles.__container}>
          {pins && pins.map(pin => {
              return(
                  <PinCard
                      media_url={pin.media_url}
                      note={pin.note}
                      name={pin.name}


                  />
              )
          })}

      </div>
    );

};

export default ListPins;