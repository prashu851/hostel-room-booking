import React from 'react'
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import './RoomTypesBar.css'
class RoomTypesBar extends React.Component {
    render(){
        return(
            <div className="room-availability">
                        <div className="icon">
                            <div className="icons">
                                <LocalHotelIcon className="na-icon" />
                                <LocalHotelIcon className="selected-icon" />
                                <LocalHotelIcon className="available-icon" />
                            </div>
                            <div className="icon-text">
                                <h6>Not Available</h6>
                                <h6>Selected</h6>
                                <h6>Available</h6>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default RoomTypesBar