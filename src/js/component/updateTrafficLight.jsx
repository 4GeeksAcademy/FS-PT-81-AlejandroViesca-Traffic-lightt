import React, { useState } from "react";
import CreateLights from "./lights";

const UpdateTrafficLight = () =>{

    const[color, setColor] = useState('');
	const[purpleVisible, setPurpleVisible] = useState(false);

	const arrLights = [
		{id: 1, lightColorDark: "updateTrafficLight__tLights--darkRed", lightColorLight: "updateTrafficLight__tLights--lightRed",},
		{id: 2, lightColorDark: "updateTrafficLight__tLights--darkYellow", lightColorLight: "updateTrafficLight__tLights--lightYellow",},
		{id: 3, lightColorDark: "updateTrafficLight__tLights--darkGreen", lightColorLight: "updateTrafficLight__tLights--lightGreen",},
		{id: 4, lightColorDark: "updateTrafficLight__tLights--darkPurple", lightColorLight: "updateTrafficLight__tLights--lightPurple",}
	];

	// Compara la variable color con el array para devolver la posicióna actual de la luz encendida y devuelve 
	// la siguiente luz que se encendera dependiendo de si purple esta o no visible.
	const buttonChangeLight = () => {

		const arrLightsList = arrLights.map(el => el.lightColorDark);

		const currentIndexColor = arrLightsList.indexOf(color);
		const nextIndexColor = (currentIndexColor + 1) % (purpleVisible ? arrLightsList.length : arrLightsList.length - 1);
		setColor(arrLightsList[nextIndexColor]);
	};

    return(
        <>	
			{/* buttons */}
            <div className="d-flex flex-column updateTrafficLight__btnPannel">

                <button className="btn btn-success top-0 start-0 m-3 mb-0" onClick={() => setPurpleVisible(!purpleVisible)}>
					Create Purple Light
				</button>

				<button className="btn btn-primary top-0 start-0 m-3" onClick={buttonChangeLight}>
					Change Light
				</button>

            </div>

			{/* Lights */}
			<div className="updateTrafficLight__trafficLight">

				{/* Si el valor del color dark no es Purple (es rojo, amarillo o verde) se imprime siempre. 
				si purple es visible se imprime tambien. */}
				{arrLights.map(el => (
                    (el.lightColorDark !== "updateTrafficLight__tLights--darkPurple" || purpleVisible) ? 
					(
                        <CreateLights
                            key={el.id}
                            lightColorDark={el.lightColorDark}
                            lightColorLight={el.lightColorLight}
                            color={color}
                            setColor={setColor}
                        />
                    ) : null
                ))}

			</div>
		</>
    );
};

export default UpdateTrafficLight;
