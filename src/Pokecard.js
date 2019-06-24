import React from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends React.Component {
  render() {
    const props = this.props;
    const imgSrc = `${POKE_API}${props.id}.png`;
    return (
      <div>
        <img src={imgSrc} alt={props.name} />
        <p>Name: {props.name}</p>
        <p>Type: {props.type}</p>
        <p>Exp: {props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
