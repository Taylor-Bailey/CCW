import React, { Component } from 'react'
import PermitPhoto from './PermitPhoto'
import PermitForm from './PermitForm'
import Heading from './Heading'
import BottomNav from './BottomNav'

export default class Permit extends Component {
    state= {
        inputs: {
            firstName: ""
        }
    }

    saveUpdate = (permitObject) => {
        localStorage.setItem('your-permit', JSON.stringify(permitObject));
        }
    render(){

        return(
        <div>
        <Heading title="Permit" />
        <PermitPhoto />
        <PermitForm saveUpdate={this.saveUpdate}/>
        <BottomNav />
        </div>
    )
}
}

