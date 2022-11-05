import React from "react"
import { useContext } from 'react';
import { useTheme } from "../hooks/useTheme";
import darkmode from "../darkmode.png"
import lightmode from "../lightmode.png"



export default function Navbar(props){

    const {color, changeMode, mode} = useTheme()

    const toggleMode = () => {
        changeMode(mode === "light" ? "dark" : "light")
    }

    console.log(mode)

    return (
        <div className = "nav-container" style = {{background: color}}>
            <h1 className = "title">Z 
            <span>
            <img className = "mode"
            onClick = {toggleMode}
            src = {mode === "light" ? darkmode : lightmode} alt = "dark" 
            />
            </span>
            o Database</h1>
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