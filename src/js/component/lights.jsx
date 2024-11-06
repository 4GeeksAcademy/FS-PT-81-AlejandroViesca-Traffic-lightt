import React, { useState } from "react";

const CreateLights = (props) => {
    return (
        <div
            className={
                `updateTrafficLight__tLights ${props.lightColorDark} 
				${props.color === props.lightColorDark ? props.lightColorLight : ''}`
            }
            onClick={() => props.setColor(props.lightColorDark)}
        >
        </div>
    );

};

export default CreateLights;
