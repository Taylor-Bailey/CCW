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
                <img className="disclaimerLogo" src={Alert} alt="Alert Icon"/>
                <h2>Disclaimer</h2>
                <p>Conseal&trade; attemps to provide information on the most recent laws regarding reciprocity between states. Conseal&trade; and it's authors imply no warranty regarding the accuracy or applicability of the information contained within.  Conseal&trade; makes no representation regarding the ability to legally carry in any locale and does not constitute legal avice.  By clicking "Agree" below, you acknowledge that you are solely responsible for following all laws and court rulings, you voluntarily accept all disclaimers, and you agree to hold the Conseal&trade; authors harmless and without liabilty from any losses, expenses, claims, and damages of an nature.</p>

                <p>The authors of Conseal&trade; hereby disclaim all responsibility and liability for this application, its content, and its use.</p>

                <p>When transporting a firearm or carrying into any area or state, it is your duty to contact local law enforcement or legal counsel regarding any questions.
                </p>
                <Link to="/states">
                    <Button id="agreeButton">Agree</Button>
                </Link>
            </div>
        </div>
        
    );
}

export default Disclaimer;