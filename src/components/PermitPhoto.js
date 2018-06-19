import React from 'react'
import PermitIcon from '../images/icons/permit.svg'
import './PermitPhoto.css'

const PermitPhoto = () => {
    return(
        <div className="addPhoto">   
            <img className ="permitIcon" src={PermitIcon} alt="Permit Icon" />
            <h3>Upload Permit Image</h3>
        </div>
    )
}

export default PermitPhoto