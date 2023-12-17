import React, { useState } from 'react';
import Dashboard from "@material-ui/icons/DashboardRounded"
import Layers from "@material-ui/icons/LayersRounded"
import '../style.css'

const SwitchBtn = ( { isChecked, setIsChecked } ) => {

    const handleToggle = () => {

        const firstChildSwitchItem = document.querySelector('.switch').children[0]
        const secondChildSwitchItem = document.querySelector('.switch').children[1]

        if (isChecked) {
            firstChildSwitchItem.classList.add('switch-item-active')
            secondChildSwitchItem.classList.remove('switch-item-active')
        } else {
            firstChildSwitchItem.classList.remove('switch-item-active')
            secondChildSwitchItem.classList.add('switch-item-active')
        }
        
        setIsChecked(!isChecked);
    }

    return (
        <div className="switch">
            <Dashboard className="switch-item switch-item-active" />
            <Layers className="switch-item" />
            <input type="checkbox" className="switch-checkbox" onChange={handleToggle} checked={isChecked}/>
        </div>
    )
}

export default SwitchBtn
