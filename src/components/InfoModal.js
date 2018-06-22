import React from 'react'
import { Header, Modal, Icon } from 'semantic-ui-react'
import './InfoModal.css'

const InfoModal = () => (
  <Modal trigger={<Icon className="infoIcon" name='info' />} centered={true} >
    <Modal.Content className="infoModal">
      <Modal.Description  className="modalDescription">
        <Header><h2>Reciprocity Map</h2></Header>
        <p>The <span className="blueText">Reciprocity Map</span> shows all states that <span className="blueText">honor</span> your CCW Permit.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default InfoModal