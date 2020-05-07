import React, { useState, useEffect } from 'react'


const CoronaData = () => {
    const [Data, setData] = useState([])
    useEffect(async () => {
        await fetch('https://api.covid19api.com/summary', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('this is my data '+responseJson);
                setData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })

    }, [])



    return (
        Data
    );

}

const Data=CoronaData;

export default Data;