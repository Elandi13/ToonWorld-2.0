import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
const Sidebar = ({currentUser, setCurrentUser}) => {
    return (
        <SidebarContainer>
            <Icon>
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

                    {currentUser && <SidebarLink to="/logout">
                        Login
                    </SidebarLink>}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
