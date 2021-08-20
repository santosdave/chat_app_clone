import React from 'react';
import {IconButton} from '@material-ui/core'; 
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./style.css";
function ChatHeader() {
    return (
        <div className="chat_header">
            <div className="chat_header_info">
                <h3> Group1</h3>
                <p>
                    Last Activity 20 minutes ago.
                </p>
            </div>
            <div className="chat_header_icons">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
