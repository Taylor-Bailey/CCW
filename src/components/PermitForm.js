import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import { stateOptions } from './../reciprocity.json'
import PermitPhoto from './PermitPhoto.js'

const PermitForm = () => {
  return(
    <Form>
      <Form.Field>
        <input type="text" placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <input type="text" placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <input type="text" placeholder='License Number' />
      </Form.Field>
      <Form.Field>
        <Dropdown placeholder='Select State' selection options={stateOptions}/>
      </Form.Field>
      <Form.Field>
        <input type="date" placeholder='Expiration Date' />
      </Form.Field>
      <Button type='submit'>Edit</Button>
    </Form>
  )
}

export default PermitForm
