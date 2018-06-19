import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import { stateOptions } from './../reciprocity.json'
import PermitPhoto from './PermitPhoto.js'
import ResidentButtons from './ResidentButtons.js'
import './PermitForm.css'

const PermitForm = () => {
  return(
    <Form className="permitForm">
      <Form.Field>
        <input type="text" placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <input type="text" placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
      <Dropdown placeholder='Issuing State' selection options={stateOptions}/>
      </Form.Field>
      <Form.Field>
        <input type="text" placeholder='License Number' />
      </Form.Field>
      <Form.Field>
        <input type="date" placeholder='Expiration Date' />
      </Form.Field>
      <ResidentButtons />
      <Button id="permitButton" type='submit'>Edit</Button>
    </Form>
  )
}

export default PermitForm
