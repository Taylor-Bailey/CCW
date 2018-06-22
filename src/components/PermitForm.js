import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import './ResidentButtons.css'
import './PermitForm.css'

// let stateOptions = [ { key: 'AL', value: 'Alabama', text: 'Alabama' },{ key: 'TN', value: 'Tennessee', text: 'Tennessee' },{ key: 'MT', value: 'Montana', text: 'Montana' },{ key: 'KY', value: 'Kentucky', text: 'Kentucky'}  ]


class PermitForm extends Component {
  constructor(props){

    super(props)
    this.state= {
      permit: {
          firstName: "",
          lastName: "",
          issueState: "",
          licenseNumber: "",
          expDate: "",
          resd: true
      }
    };
    
    let storedPermit = localStorage.getItem('your-permit');
    let foundPermit = this.checkForPermit(storedPermit);
    console.log("permitttt: ", this.setState);
    this.setState({permit: foundPermit} , () => console.log("finding this shit: ", this.state))
    
  }
 
  checkForPermit = (localStorageObject) => {
    if(localStorageObject){
      let permit = JSON.parse(localStorageObject);
      console.log("stored permit: ", permit);
        return permit
    }else{
      return ({
        firstName: "",
        lastName: "",
        issueState: "",
        licenseNumber: "",
        expDate: "",
        resd: true
    })
    }
  }

      onFormSubmit = (event) => {
        let permitObject = {}
        permitObject.firstName = this.state.permit.firstName;
        permitObject.lastName = this.state.permit.lastName;
        permitObject.issueState = this.state.permit.issueState;
        permitObject.licenseNumber = this.state.permit.licenseNumber;
        permitObject.expDate = this.state.permit.expDate;
        permitObject.resd = this.state.permit.resd;
        this.props.saveUpdate(permitObject);
        event.preventDefault();
      }

  handleChange = (event) => {
    const permit = Object.assign({}, this.state.permit);
    permit[event.target.name] = event.target.value;
    this.setState({permit});
    console.log("permit: ", this);
  }

  render(){

    return(
      <Form className="permitForm" onSubmit={this.handleSubmit}>
      <Form.Field>
          <input type="text" placeholder='First Name' name='firstName' value={this.state.permit.firstName} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
        <input type="text" placeholder='Last Name' name='lastName' value={this.state.permit.lastName} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder='License Number' name='licenseNumber' value={this.state.permit.licenseNumber} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <input type="text" placeholder='Issuing State' name='issueState' value={this.state.permit.issueState} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <input type="date" placeholder='Expiration Date' name='expDate' value={this.state.permit.expDate} onChange={this.handleChange} />
        </Form.Field>
        <Button.Group className="residentButtons">
          <Button className="residentButton" >Resident</Button>
          <Button.Or />
          <Button className="residentButton">Non-Resident</Button>
        </Button.Group>
        <Button id="permitButton" type='submit' onClick={this.onFormSubmit} >Save</Button>
      </Form>
    )
  }
}

export default PermitForm
