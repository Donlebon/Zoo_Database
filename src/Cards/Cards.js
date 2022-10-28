import React from "react";


export default function Card(props){
    return (
        <div className = "animalContainer">
            <div className = "card" onClick = {(e) => props.flipper(e)}>
                <div className = "front">
                    <img className = "animalPic" src = {props.animalData.image_link} alt = "Animal Picture"/>
                    <div className = "titleContainer">
                        <h2 className = "animalName">{props.animalData.name}</h2>
                    </div>
                    <div className = "info">
                        <p className = "type">Type: {props.animalData.animal_type}</p>
                        <p className = "life">Lifespan: {props.animalData.lifespan} years</p>
                        <p className = "weight">Weight: {props.animalData.weight_min} - {props.animalData.weight_max} lbs</p>
                        <p className = "details">More Info...</p>
                    </div>
                </div>
                <div className = "back">
                    <div className = "titleContainer">
                        <h2 className = "animalName">{props.animalData.name}</h2>
                    </div>
                    <div className = "info">
                        <p className = "backType">Type: {props.animalData.animal_type}</p>
                        <p className = "backLife">Lifespan: {props.animalData.lifespan} years</p>
                        <p className = "backWeight">Weight: {props.animalData.weight_min} - {props.animalData.weight_max} lbs</p>
                        <p className = "location">Located in {props.animalData.geo_range}</p>
                        <p className = "habitat">Habitat: {props.animalData.habitat}</p>
                        <p className = "diet">Diet: {props.animalData.diet}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
// <div className = "animalContainer">
//         {props.animaldata.map(animal => (
//             <div key = {animal.id} className = "card" >
                
//                     <img className = "animalPic" src = {animal.image_link} alt = "Animal Picture"/>
//                     <div className = "titleContainer">
//                         <h2 className = "animalName">{animal.name}</h2>
//                     </div>
//                     <div className = "info">
//                         <p className = "type">Type: {animal.animal_type}</p>
//                         <p className = "life">Lifespan: {animal.lifespan} years</p>
//                         <p className = "weight">Weight: {animal.weight_min} - {animal.weight_max} lbs</p>
//                         <p onClick = {() => handleClick(animal.id)} className = "details">More Info...</p>
//                     </div>
//             </div>
//         ))}    
//         </div>