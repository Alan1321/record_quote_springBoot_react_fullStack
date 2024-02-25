import React from 'react'
import Modal from "react-modal"

import { useState } from 'react'
import { Button } from '@mui/material'

import TextField from '@mui/material/TextField';

import clsx from 'clsx';

import "../styles/add_quote.css"

const AddQuote = ({ closeModal, modalState, data }) => {

    const [nameData, setnameData] = useState(null);
    const[quoteData, setquoteData] = useState(null);

    const consoleData = (e) =>{
        console.log(e.target)
    }

  return (
    <div className="main_add_quote">
        <Modal
        isOpen={modalState}
        style={{
            overlay: {
                position: 'fixed',
                top: '10px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(1,1,1,0)'
            },
            content:{
                backgroundColor:"rgba(0,0,0,0.3)"
            }
        }}
        >
            <div className="close_button" onClick={()=>closeModal(false)}>
                X
            </div>
            <div className="add_quote_main_container">
                <div className="quote_container">
                    <div className="inputss">
                        <h1 className="name">Name</h1>
                        <TextField id="outlined-basic" label="Enter Name" variant="outlined" style={{width:"90%"}}/>
                        <h1 className="name">Quote</h1>
                        <TextField id="outlined-basic" label="Enter Quote" variant="outlined" style={{width:"90%"}}/>
                        <div className="submit_inputs">
                            <Button variant="contained" color="success" onClick={consoleData}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal> 
    </div>
  )
}

export default AddQuote