import React from 'react'


let Agree = (props) => {
    const agrees = props.agrees;
    if (agrees) {
        return <SelectState />
    }
        return <Disclaimer />
}