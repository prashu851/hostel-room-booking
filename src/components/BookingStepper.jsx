import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import './BookingStepper.css'
class BookingStepper extends React.Component {
    render(){
        return(
            <div className="stepper">
                <div className="steps">
                    <IconButton className="check-btn" color="primary" component="span">
                        <CheckIcon />
                    </IconButton>
                    <Divider className="step-div" variant="middle" />
                    <Button className="sec-step-btn">2</Button>
                    <Divider className="step-div" variant="middle" />
                    <Button className="third-step-btn">3</Button>
                </div>
                <div className="steps-text">
                    <h6>Guest Details</h6>
                    <h6 className="select-room">Select Room</h6>
                    <h6 className="payment">Payment</h6>
                </div>
            </div>
        )
    }
}

export default BookingStepper;