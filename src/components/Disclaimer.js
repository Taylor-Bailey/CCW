import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import { Button } from 'semantic-ui-react'
import './Disclaimer.css'
import Alert from '../images/icons/disclaimer.svg'

let Disclaimer = (props) => {
    return (
        <div className="">
            <Heading title="Disclaimer" />
            <div className="disclaimerSection">
                <img className="disclaimerLogo" src={Alert}/>
                <h2>Disclaimer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ultricies dapibus. Praesent nec nisi at lacus dapibus venenatis. Praesent vestibulum mi quis orci interdum, quis pretium arcu elementum. Integer enim ligula, iaculis eu tincidunt vel, aliquam vitae nibh. Ut sit amet enim mauris. Nunc fringilla augue purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean euismod magna in urna vehicula mattis vel in purus. Morbi a commodo nunc. Aenean feugiat nisl enim. Fusce urna quam, imperdiet sit amet magna vestibulum, fermentum iaculis ex. Praesent elit urna, maximus vitae volutpat eget, finibus quis neque. Aliquam pharetra pharetra massa in gravida. Sed ut cursus risus.

                Mauris commodo erat eu diam lobortis eleifend non id dolor. Nam dictum iaculis magna vitae ullamcorper. Praesent sit amet consequat justo. Aenean a tellus consequat, congue urna sit amet, porttitor nunc. Sed a rhoncus ex, sed aliquam neque. Praesent tempor nulla nulla, et convallis urna scelerisque sed. Aliquam ut semper risus, at dictum nunc. Aliquam sit amet ultrices metus, eget volutpat massa. Nulla ipsum diam, ullamcorper et lectus ac, suscipit hendrerit nisl. Fusce vel quam et risus pellentesque egestas. Aenean ut eleifend turpis. Curabitur ultricies lorem sodales, fringilla erat vel, finibus mauris.
                </p>
                <Link to="/select-state">
                    <Button id="agreeButton">Agree</Button>
                </Link>
            </div>
        </div>
        
    );
}

export default Disclaimer;