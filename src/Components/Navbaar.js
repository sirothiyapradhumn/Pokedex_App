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
                        <input type="checkbox" name={type} value={type} />
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
                        <input type="checkbox" name={week} value={week} />
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