import React from 'react'
import { Button } from '@mui/material'
import AddQuote from './AddQuote'

import { useState } from 'react'

import "../styles/main.css"
import DisplayQuote from './DisplayQuote'

const Main = () => {

    const [addQuote, setAddQuote] = useState(false);
    const closeModal = () =>{
        setAddQuote(false);
    }
    const post_request_data = (data) =>{
        const api = "http://localhost:8080/person/add"

        fetch(api,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        })
    }
    
  return (
    <div className="main_container">
        <Button variant="contained" color="success" onClick={()=>{setAddQuote(true)}}>Add Quote +</Button>
        {addQuote && <AddQuote closeModal={closeModal} modalState={addQuote} getData={post_request_data}/>}
        <DisplayQuote />
    </div>
  )
}

export default Main