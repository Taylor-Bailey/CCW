import React from 'react';
import { Header } from 'semantic-ui-react';
import './Heading.css';


const Heading = (props) =>{
        return (
            <div>
                <Header id="Header" >{props.title}</Header>
            </div>
        );
}

export default Heading