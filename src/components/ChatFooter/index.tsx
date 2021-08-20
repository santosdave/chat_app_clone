import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import "./style.css";
function ChatFooter() {
    return (
        <div className="chat_footer"> 
            <form>
                <input type="text" className="" placeholder="Start typing..."/>
                {/* <button type="submit" className="">
                    Send
                </button> */}
            </form>
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    )
}

export default ChatFooter
