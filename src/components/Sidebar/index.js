import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = ({currentUser, setCurrentUser, toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/favorites">
                        Favorites
                    </SidebarLink>

                    <SidebarLink to="/new-cartoon">
                        Add Cartoon
                    </SidebarLink>

                    {!currentUser && <SidebarLink to="/login">
                        Login
                    </SidebarLink>}

                    {currentUser && <SidebarLink to="/logout" onClick={()=> setCurrentUser(null)}>
                        Logout
                    </SidebarLink>}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
