import React from 'react'
import { useState, useEffect } from 'react'

import "../styles/display_quote.css"
import DisplayBox from './DisplayBox'
import { useScrollTrigger } from '@mui/material'

const DisplayQuote = ({ fetchData }) => {
    const data = [
        {
            "name":"Alan",
            "quote":"YOLO"
        },
        {
            "name":"Sanjog",
            "quote":"Na, we live twice."
        },
        {
            "name":"Sanjog",
            "quote":"Na, we live twice."
        },
        {
            "name":"Sanjog",
            "quote":"Na, we live twice."
        },
        {
            "name":"Sanjog",
            "quote":"Na, we live twice."
        }
    ]

    const [db_data, setData] = useState([]);

    useEffect(()=>{
        const api = "http://localhost:8080/person/"
        fetch(api,{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }).then((response)=>{
            return response.json()   
        }).then((responseData)=>{
            console.log(responseData)
            setData(responseData)
        })
    }, [fetchData]) 

  return (
    <div className="display_quote_main_container">
        <h1 className="display_title">Quotes in DB</h1>
        <div className="mini_displays">
            {db_data.map((item)=>(
                <DisplayBox data={item} />
            ))}
        </div>
    </div>
  )
}


export default DisplayQuote