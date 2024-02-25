import React from 'react'
import { Button } from '@mui/material'
import AddQuote from './AddQuote'

import { useState } from 'react'

import "../styles/main.css"

const Main = () => {

    const [addQuote, setAddQuote] = useState(false);
    const closeModal = () =>{
        setAddQuote(false);
    }

  return (
    <div className="main_container">
        <Button variant="contained" color="success" onClick={()=>{setAddQuote(true)}}>Add Quote +</Button>
        {addQuote && <AddQuote closeModal={closeModal} modalState={addQuote}/>}
    </div>
  )
}

export default Main