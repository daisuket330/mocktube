import React from 'react'
import './sideBarRow.css';


function SideBarRow({selected, Icon, Title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
           <h2 className="sidebarRow_title">{Title}</h2> 
        </div>
    );
}

export default SideBarRow
