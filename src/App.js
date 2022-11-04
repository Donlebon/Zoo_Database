import React, { useEffect } from 'react';
import { useState ,ReactDOM, useRef } from 'react';
import Navbar from './nav/navbar';
import Card from './Cards/Cards';
import { useFetch } from './hooks/useFetch';
import ThemeSelector from './Components/ThemeSelector';

export default function App(){

  const {data, isPending, animalGroup, setCount, setData, setanimalGroup, testing} = useFetch("https://zoo-animal-api.herokuapp.com/animals/rand/8")

  const none = useRef(false)

  const getRandomAnimals = () => {
    none.current = false
    return setCount(prev => prev + 1)
  }

  const handleChange = (e) => {
    if(!testing.current.map(item => item.animal_type).includes(e.target.value)){
      if(e.target.value === "None"){
        none.current = false
      } else{
        none.current = true
        setData(testing.current)
      }
    } else if(testing.current.map(item => item.animal_type).includes(e.target.value)){
      none.current = false
    } if (e.target.value === "None"){
      setData(testing.current)
    } else if(e.target.value === "Mammal"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Mammal"
      }))
    } else if(e.target.value === "Fish"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Fish"
      }))
    } else if(e.target.value === "Bird"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Bird"
      }))
    } else if(e.target.value === "Reptile"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Reptile"
      }))
    } else if(e.target.value === "Amphibian"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Amphibian"
      }))
    } else if(e.target.value === "Marsupial"){
      setData(testing.current)
      setData(prev => prev.filter(item => {
        return item.animal_type === "Marsupial"
      }))
    } 
  }

  const handleFlip = (e) => {
    if(e.currentTarget.style.transform === "rotateY(180deg)"){
      e.currentTarget.style.transform = "none"
    } else{
      e.currentTarget.style.transform = "rotateY(180deg)"
    }
  }


  return (
      <div className = "main">
        <Navbar 
        type = {animalGroup}
        change = {(e) => handleChange(e)}
        getAnimals = {() => getRandomAnimals()}
        />
        <ThemeSelector />
        {isPending && <h1 className = "loading">Loading Animals...</h1>}
        {none.current && <h1 className = "none">No Animals Found!</h1>}  
        <div className = "container">
        {data && data.map(item => (
          <Card 
          key = {item.id}
          id = {item.id}
          notFound = {none}
          animalData = {item}
          flipper = {handleFlip}
          />
        ))}
        </div>
      </div>
  )
}
