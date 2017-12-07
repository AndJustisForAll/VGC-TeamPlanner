import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actionCreators';
import Pokemon from './pokemon';



class PokemonSelector extends React.Component {
  //
  // componentDidMount(){
  //   fetch('https://pokeapi.co/api/v2/pokedex/1')
  //     .then((response)=>{
  //       if(response.status !== 200){
  //         console.log(`Looks like there was a problem. Status code: ${response.status}`);
  //         return;
  //       }
  //
  //       response.json().then((data) => console.log(data));
  //     })
  //     .catch((err) => console.log('Fetch Error :S', err));
  // }

  render(){
    const allPokemon = this.props.nationalDex.pokemon_entries || [];
    return (
      <section className="pokemon-selector">
        {allPokemon.map((pkmn, i) => <Pokemon pokemon={pkmn} key={i} />)}
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    nationalDex: state.nationalDex,
    team: state.team
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}




export default connect(mapStateToProps,mapDispatchToProps)(PokemonSelector);
