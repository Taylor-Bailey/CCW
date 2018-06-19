import React from 'react'
import { Button, Header, Modal, Icon, Dimmer } from 'semantic-ui-react'
import './InfoModal.css'

const InfoModal = () => (
  <Modal trigger={<Icon className="infoIcon" name='info' />} centered={true} >
    <Modal.Content className="infoModal">
      <Modal.Description  className="modalDescription">
        <Header>Reciprocity Map</Header>
        <p>The <span className="blueText">Reciprocity Map</span> shows all states that <span className="blueText">honor</span> your CCW Permit.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default InfoModal