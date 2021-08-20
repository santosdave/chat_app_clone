import React from 'react';
import "./style.css";
import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
function GroupDetails() {
    return (
        <div className="group_details">
            <Avatar className="avatar">
                <GroupIcon/>
            </Avatar>
            <h1>Group1</h1>
            <p>You were added to the group</p>
        </div>
    )
}

export default GroupDetails
