import React from "react";
import "./Pokecard.css";

// ===== Original URL =====
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// ===== Fancier URL =====
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends React.Component {
  render() {
    const props = this.props;
    const imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={props.name} />
        </div>
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">Exp: {props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
