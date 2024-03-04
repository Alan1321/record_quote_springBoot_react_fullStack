import React from 'react'

import "../styles/display_quote.css"
import { api } from '../config'

import { Button } from '@mui/material'

const DisplayBox = ({ data, setData }) => {

  const updateHandler = () =>{

  }
  const deleteHandler = () =>{
    fetch(api,{
      method:"DELETE",
      mode:"cors",
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
  }

  return (
    <div className="mini_display">
        <div className="info_from_db">
          <h3 className="mini_name">Name:</h3>
          <p className="mini_name_actual">{data.name}</p>
          <h3 className="mini_quote">Quote:</h3>
          <p className="mini_quote">{data.quote}</p>
        </div>
        <div className="display_box_buttons">
          <Button variant="contained" color="success" onClick={updateHandler}>Update</Button>
          <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button>
        </div>
    </div>
  )
}

export default DisplayBox