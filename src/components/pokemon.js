import React from 'react';

class Pokemon extends React.Component {

  render(){
    const pokemon = this.props.pokemon || {};
    const dexNumber = pokemon.id;
    const name = pokemon.name;
    const pokemonVisible = pokemon.isVisible ? 'visible' : 'hidden';
    return (
      <div className={`sprite ${name} ${pokemonVisible}`}><span>{dexNumber}</span><span> - {name}</span></div>
    )
  }
}

export default Pokemon;
