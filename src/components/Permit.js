import React from 'react'
import PermitPhoto from './PermitPhoto'
import PermitForm from './PermitForm'
import Heading from './Heading'
import BottomNav from './BottomNav'

const Permit = () => {
    return(
        <div>
            <Heading title="Permit" />
            <PermitPhoto />
            <PermitForm />
            <BottomNav />
        </div>
    )
}

export default Permit

