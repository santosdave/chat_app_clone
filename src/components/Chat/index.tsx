import React, { useState, useEffect, useCallback } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { parseISO, differenceInCalendarDays, format, formatDistanceToNow } from 'date-fns';
import "./style.css";
import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            
            <div className="chat_body">
                <Scrollbar className="chat_scrollbar">
                    <div className="chat_main">
                            <div className="chat_body">
                                <div className="message_body">
                                    <Avatar>
                                        <PersonIcon/>
                                    </Avatar>
                                    <p className="chat_message">
                                        <span className="chat_person">
                                            you
                                        </span>
                                        I received this message from you.
                                    </p>
                                </div>
                                <span className="chat_timestamp">about 1 hour ago</span>
                            </div>
                        
                    </div>
                    
                </Scrollbar>
            </div>
            <ChatFooter/>
        </div>
    )
}

export default Chat
