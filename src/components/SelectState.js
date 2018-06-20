import React from 'react'
import Heading from './Heading'
import './SelectState.css'
import StateList from './StateList'

let SelectState = () => {
    return (
        <div>
            <Heading title="Select a State" />
            <StateList />
        </div>
    )
}

export default SelectState