import React, {useState, useEffect,Fragment} from "react";
import "./style.css";
import Sidebar from "../Sidebar";
import { useHistory } from 'react-router-dom';
import Chat from "../Chat";
import GroupDetails from "../GroupDetails";
export interface GroupProps{
    history: ReturnType<typeof useHistory>;
}
function Group({ history}: GroupProps) {
    return (
        <div className="group">
            <Sidebar history={history}/>
            <Fragment>
                <Chat/>
                <GroupDetails/>
            </Fragment>
        </div>
    )
}

export default Group
