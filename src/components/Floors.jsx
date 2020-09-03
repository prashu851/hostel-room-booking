import React from 'react'
import Divider from '@material-ui/core/Divider'
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import Button from '@material-ui/core/Button'
import Room from './Room'
import './Floors.css'
class Floors extends React.Component {
    render(){
        return(
            <div className="rooms">
                <div className="floor">
                    <h4>Floor 1</h4>
                    <Room roomName={"Room 1"} available={false} />
                    <Room roomName={"Room 2"} available={false} />
                </div>
                <Divider orientation="vertical" light={true} />
                <div className="floor">
                    <h4>Floor 2</h4>
                    <Room roomName={"Room 1"} available={true} />
                    <Room roomName={"Room 2"} available={true} />
                </div>
                <Divider orientation="vertical" light={true} />
                <div className="floor">
                    <h4>Floor 3</h4>
                    <Room roomName={"Room 1"} available={false} />
                    <Room roomName={"Room 2"} available={false} />
                </div>
            </div>
        )
    }
}
export default Floors;