import React from 'react';

class Pokemon extends React.Component {

  render(){
    const {pokemon} = this.props;
    const dexNumber = pokemon.entry_number;
    const name = pokemon.pokemon_species.name;
    return (
      <div className={`sprite ${name}`}><span>{dexNumber}</span><span> - {name}</span></div>
    )
  }
}

export default Pokemon;
