import React, {useState, useEffect} from "react";
import "./style.css";
import Sidebar from "../Sidebar";
import { useHistory } from 'react-router-dom';
export interface GroupProps{
    history: ReturnType<typeof useHistory>;
}
function Group({ history}: GroupProps) {
    return (
        <div className="group">
            <Sidebar history={history}/>
        </div>
    )
}

export default Group
