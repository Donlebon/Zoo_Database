import React from "react"
import { useContext } from 'react';
import { useTheme } from "../hooks/useTheme";

export default function Navbar(props){

    const {color} = useTheme()

    return (
        <div className = "nav-container" style = {{background: color}}>
            <h1 className = "title">Zoo Database</h1>
            <button className = "generate" onClick = {props.getAnimals}>Discover New Animals</button>
            <div className = "search">
            <label htmlFor = "animalType" className = "animaltype" >Animal Type: </label>
                <select id = "animalType"
                    onChange = {props.change}
                    name = "animalType"
                >
                    <option value = "None">None</option>
                    <option value = "Mammal">Mammal</option>
                    <option value = "Fish">Fish</option>
                    <option value = "Bird">Bird</option>
                    <option value = "Reptile">Reptile</option>
                    <option value = "Amphibian">Amphibian</option>
                    <option value = "Marsupial">Marsupial</option>
                </select>
            </div>
        </div>
    )
}