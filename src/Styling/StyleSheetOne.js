import React from 'react'

const heading = {
    fontSize: '50px',
    color: 'Blue'
}

const div = {
    backgroundColor: 'crimson',
    color: 'white',
    width: '300px',
    height: '200px'
}

function StyleSheetOne() {
    return (
        <div style={div}>
            <h1 style={heading}>Inline Styling</h1>
        </div>
    )
}

export default StyleSheetOne
