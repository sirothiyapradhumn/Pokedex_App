import React, { useState } from 'react'


const types = ['Grass','Poison','Fire','Flying','Water','Bug','Normal','Electric','Ground','Psychic','Rock','Ice','Ghost','Dragon','Fighting'];

  const weakness = [
    'Grass',
    'Poison',
    'Fire',
    'Flying',
    'Water',
    'Bug',
    'Fairy',
    'Electric',
    'Ground',
    'Psychic',
    'Rock',
    'Ice',
    'Ghost',
    'Dragon',
    'Fighting',
    'Steel',
    'Dark',
  ];

function Navbaar() {
    const [checkedStateTyp, setCheckedStateTyp] = useState(new Array(types.length).fill(false));
    //console.log(checkedStateTyp);
    const [checkedStateWeak, setCheckedStateWeak] = useState(new Array(weakness.length).fill(false));
    const [pokeType, setpokeType] = useState([]);
    //console.log(pokeType);
    const [pokeWeakness, setPokeWeakness] = useState([]);
    console.log(pokeWeakness);
    
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedStateTyp.map((item, index) =>
          index === position ? !item : item
        );

        setCheckedStateTyp(updatedCheckedState);

        let tempData = updatedCheckedState.reduce((arr, currState, idx) =>{
            if(currState === true){
                arr.push(types[idx])
            }
            return arr;
        },[]);
        
        setpokeType(tempData);
    }

    const handleOnChange1 = (position) => {
        const updatedCheckedState = checkedStateWeak.map((item, index) =>
          index === position ? !item : item
        );

        setCheckedStateWeak(updatedCheckedState);

        let tempData = updatedCheckedState.reduce((arr, currState, idx) =>{
            if(currState === true){
                arr.push(types[idx])
            }
            return arr;
        },[]);
        
        setPokeWeakness(tempData);
    }

  return (
    <div className='navbar-self'>
        <div className='title'>
            <h1>Pokedex</h1>
        </div>

        <div className='poke-types'>
            <h3>Types</h3>
            <ul className="list">
            {types.map((type, index) => {
                return (
                    <li key={index}>
                    <div className="toppings-list-item">
                        <div className="left-section">
                        <input 
                            type="checkbox" name={type} 
                            value={type} 
                            checked = {checkedStateTyp[index]}
                            onChange={()=>handleOnChange(index)} 
                            />

                        <label>{type}</label>
                        </div>
                    </div>
                    </li>
                );
            })}
            </ul>
        </div>

        <div className='poke-weekness'>
            <h3>Weaknesses</h3>
            <ul className="list">
            {weakness.map((week, index) => {
                return (
                    <li key={index}>
                    <div className="toppings-list-item">
                        <div className="left-section">
                        <input type="checkbox" name={week} value={week} 
                        checked = {checkedStateWeak[index]}
                        onChange={()=>handleOnChange1(index)} 
                        />
                        <label>{week}</label>
                        </div>
                    </div>
                    </li>
                );
            })} 
            </ul>           
        </div>

        <div className='btn-go'>
            <button>GO</button>
        </div>

        <div className='search-bar'>
            <input type="text" placeholder="Search.."></input>
        </div>
    </div>
  )
}

export default Navbaar