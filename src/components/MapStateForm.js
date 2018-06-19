import React from 'react'
import {Form, Dropdown } from 'semantic-ui-react'
import { stateOptions } from './../reciprocity.json'
import PermitPhoto from './PermitPhoto.js'
import ResidentButtons from './ResidentButtons.js'
import './PermitForm.css'

const MapStateForm = () => {
  return(
    <Form className="permitForm">
      <Form.Field>
        <Dropdown placeholder='Select State' selection options={stateOptions}/>
      </Form.Field>
    </Form>
  )
}

export default MapStateForm