import React from 'react'
import Divider from '@material-ui/core/Divider'
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import Button from '@material-ui/core/Button'
import Floors from './Floors'
import RoomTypesBar from './RoomTypesBar';
import './RoomSelection.css'
class RoomSelection extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="box">
                    <div className="room-selection">
                        <h2>Room Selection</h2>
                        <Divider className="divider" variant="middle" light={true} />
                    </div>
                    <RoomTypesBar />
                    <Divider className="room-div" variant="middle" light={true} />
                    <Floors />
                    <Divider variant="middle" light={true} />
                    <div className="payment-btns">
                        <Button className="back-btn">Back</Button>
                        <Button className="proceed-btn">Proceed to pay</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomSelection;