import React from 'react'
import { Button } from '@mui/material'
import AddQuote from './AddQuote'

import { useState } from 'react'

import "../styles/main.css"
import DisplayQuote from './DisplayQuote'
import { api } from '../config'

const Main = () => {

  const [addQuote, setAddQuote] = useState(false);
  const [fetchData, setfetchData] = useState(true);
  const closeModal = () =>{
      setAddQuote(false);
  }
  const updateFetchDataState = () =>{
    setfetchData(!fetchData)
  }
  const post_request_data = (data) =>{
      fetch(api,{
          method:"POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      }).then(()=>{
        updateFetchDataState();
      })
  }
    
  return (
    <div className="main_container">
        {!addQuote && <Button variant="contained" color="secondary" onClick={()=>{setAddQuote(true)}}>Add Quote +</Button>}
        {addQuote && <AddQuote closeModal={closeModal} modalState={addQuote} getData={post_request_data}/>}
        {!addQuote && <DisplayQuote fetchData={fetchData}/>}
    </div>
  )
}

export default Main