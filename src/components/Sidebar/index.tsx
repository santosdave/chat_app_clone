import React from "react";
import "./style.css";
import { useHistory } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';
import SidebarHeader from '../SidebarHeader';
export interface SidebarProps {
	history: ReturnType<typeof useHistory>;
	
}
function Sidebar({ history}:SidebarProps) {
    return (
        <div className="sidebar">
            <SidebarHeader history={history}/>
        </div>
    )
}

export default Sidebar
