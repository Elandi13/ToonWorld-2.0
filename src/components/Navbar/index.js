import React from 'react'
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({currentUser, setCurrentUser}) => {
    return (
        <React.Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> ToonWorld </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/favorites"> Favorites
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="/new-cartoon"> Add Cartoon
                                </NavLinks>
                            </NavItem>
                            
                            <NavItem>
                                {!currentUser && <NavLinks to="/login"> Login
                                </NavLinks> } 
                            </NavItem>

                            <NavItem>
                                {currentUser && <NavLinks to="/logout" onClick={()=> setCurrentUser(null)} > Logout
                                </NavLinks> }
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar
