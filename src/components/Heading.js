import React from 'react';
import { Header,Button, Icon } from 'semantic-ui-react';
import './Heading.css';


const Heading = (props) =>{
        return (
            <div>
                <Header  className="Header" size='medium' centered>{props.title}</Header>
            </div>
        );
}

export default Heading