import React from 'react'
import Heading from './Heading'
import './SelectState.css'
import USA from '../images/icons/usa.svg'

let SelectState = () => {
    return (
        <div className="">
            <Heading title="Select A State" />
            <img className="usaIcon" src={USA} />
        </div>
    )
}

export default SelectState