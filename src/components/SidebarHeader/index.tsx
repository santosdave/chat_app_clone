import React, {useState} from "react";
import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import "./style.css";
import { useHistory } from 'react-router-dom';
export interface SidebarHeaderProps {
    history: ReturnType<typeof useHistory>;
}
function SidebarHeader({ history}:SidebarHeaderProps) {
    const [anchorEl, setAnchorEl]=useState<null | HTMLElement>(null);
    const goToLogin= async ()=>{
        history.push('/login');
    }
    
    return (
        <div className="sidebarHeader">
            <div className="sidebarHeader_avatar">
                <Avatar>
                        <PersonIcon /> 
                </Avatar>
                <p className="header__text">Santos Dave</p>
            </div>
            <div className="sidebarHeader_icons">
                <IconButton >
                    <ChatIcon  />
                </IconButton>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                id="sidebar_menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={goToLogin}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default SidebarHeader
