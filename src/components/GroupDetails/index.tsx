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
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PhotoIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Change Group Photo"} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MeetingRoomIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Leave Group'} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Delete Group'} />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"Santos Dave"} />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"Dave Santos"} />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"Santos Sonjour"} />
                </ListItem>
            </List>
        </div>
    )
}

export default GroupDetails
