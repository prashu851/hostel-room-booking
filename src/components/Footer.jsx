import React from 'react'
import './Footer.css'
import Button from '@material-ui/core/Button'
class Footer extends React.Component {
    render(){
        return(
        <footer className="footer">
      <div className="footer-list" id="About">
        <ul>
          <li className="list-title">Quick Links</li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">HOSTEL POLICIES</a>
          </li>
          <li>
            <a href="#">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <Button className="book-btn">BOOK YOUR STAY</Button>
          </li>
        </ul>
      </div>

      <div className="footer-list" id="experiences">
        <ul>
          <li className="list-title">EXPERIENCES</li>
          <li>
            <a href="#">Ganga Aarthi</a>
          </li>
          <li>
            <a href="#">River Rafting</a>
          </li>
          <li>
            <a href="#">Chopta</a>
          </li>
          <li>
            <a href="#">Kunjapuri</a>
          </li>
        </ul>
      </div>

      <div className="footer-list" id="popular articles">
        <ul>
          <li className="list-title">POPULAR ARTICLES</li>
          <li>
            <a href="#">Come Alone Go Together</a>
          </li>
          <li>
            <a href="#">Rent A Scooter - Top 5 Places to Visit</a>
          </li>
          <li>
            <a href="#">Top 10 Things To Do in Rishikesh</a>
          </li>
          <li>
            <a href="#">5 Cafes And Restaurants near Blue Jay</a>
          </li>
        </ul>
      </div>
      <div className="footer-list" id="contacts">
        <ul>
          <li className="list-title">CONTACTS</li>
          <li>
            contact@bluejayhostels
          </li>
          <li>
            +91 8057212070
          </li>
          <li>
            Opposite AyurPak, Near SBI Bank,Jonk,Badrinath Rd,Tapovan,Rishikesh
          </li>
          
        </ul>
      </div>
    </footer>
        )
    }
}

export default Footer;