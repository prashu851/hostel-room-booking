import React from 'react'
import './NavBar.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
class NavBar extends React.Component {
    render(){
        return(
               <div className="nav-bar">
                   <div className = "menu-options">
                       <a href="">HOME</a>
                       <a href="">EXPERIENCES</a>
                       <a href="">ROOMS</a>
                       <a href="">GALLERY</a>
                    </div>
                    <div className="menu">
                        <IconButton className="menu-btn" edge="start" color="default" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </div>
               </div> 
        )
    }
}
export default NavBar;