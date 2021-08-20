import React from "react";
import "./style.css";
import { useHistory } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';
import SidebarHeader from '../SidebarHeader';
import SidebarGroups from "../SidebarGroups";
export interface SidebarProps {
	history: ReturnType<typeof useHistory>;
	
}
function Sidebar({ history}:SidebarProps) {
    return (
        <div className="sidebar">
            <SidebarHeader history={history}/>
            <div className="sidebar_groups">
                <Scrollbar className="sidebar_scrollbar">
                    <SidebarGroups/>
                    <SidebarGroups/>
                    <SidebarGroups/>
                    <SidebarGroups/>
                </Scrollbar>
            </div>
        </div>
    )
}

export default Sidebar
