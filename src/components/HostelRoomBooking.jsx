import React from 'react'
import './HostelRoomBooking.css'
import NavBar from './NavBar'
import Footer from './Footer'
import RoomSelection from './RoomSelection'


import BookingStepper from './BookingStepper'
class HostelRoomBooking extends React.Component {
    render(){
        return(
            <>
                <NavBar />
                <BookingStepper />
                <RoomSelection />
                <Footer />
            </>

        )
    }
}

export default HostelRoomBooking;