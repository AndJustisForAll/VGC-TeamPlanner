import React from 'react';

class Pokemon extends React.Component {

  render(){
    const pokemon = this.props.pokemon || {};
    const dexNumber = pokemon.id;
    const name = pokemon.name;
    return (
      <div className={`sprite ${name}`}><span>{dexNumber}</span><span> - {name}</span></div>
    )
  }
}

export default Pokemon;
