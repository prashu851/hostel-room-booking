import React from 'react'
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import Button from '@material-ui/core/Button'
import './Room.css'
class Room extends React.Component {
    constructor(){
        super();
        this.state={
            isSelected:false
        }
        this.changeAvailability=this.changeAvailability.bind(this)
    }
    changeAvailability(){
        this.setState({
            isSelected:!this.state.isSelected
        })
    }
    renderNotAvailableRoom(){
        return <Button 
                variant="outlined" 
                startIcon={<LocalHotelIcon style={{color:"gray",fontSize:"30px"}} />}
                >Room 1</Button>
    }
    render(){
        if(!this.props.available){
            return this.renderNotAvailableRoom()
        }
        const hotelIconProps=this.state.isSelected?{fontSize:"30px",color:"#01baef"}:{fontSize:"30px",color:"black"}
        return(
                <Button className={this.state.isSelected?"room-selected":"room-available"} variant="outlined" startIcon={<LocalHotelIcon style={hotelIconProps}  />} onClick={this.changeAvailability}>{this.props.roomName}</Button>
        )
    }
}

export default Room;