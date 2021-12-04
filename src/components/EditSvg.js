import React from "react";
import {ReactComponent as EditLogoSvg} from './img/edit-button-svg.svg'
import style from "./modules/TodoListItem.module.css";

const EditLogo = () => {
    return (
        <div>
            <EditLogoSvg style={style.editBtn} />
        </div>
    )
}

export default EditLogo