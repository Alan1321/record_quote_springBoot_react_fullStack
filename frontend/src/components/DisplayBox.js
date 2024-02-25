import React from 'react'

import "../styles/display_quote.css"

const DisplayBox = ({ data }) => {
  return (
    <div className="mini_display">
        <h3 className="mini_name">Name:</h3>
        <p className="mini_name_actual">{data.name}</p>
        <h3 className="mini_quote">Quote:</h3>
        <p className="mini_quote">{data.quote}</p>

    </div>
  )
}

export default DisplayBox