import React,{Fragment}from "react";
import { Avatar } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import  "./style.css";
function SidebarGroups() {
    return (
        <div className="sidebar_group">
            <Avatar>
				<GroupIcon />
			</Avatar>
            <Fragment>
                <div className="sidebar_group_details">
                    <h2>Group1</h2>
                    <p>You were added to a group</p>
                </div>
                <div className="sidebar_group_unread">
                    <p>2</p>
                </div>
            </Fragment>
        </div>
    )
}

export default SidebarGroups
