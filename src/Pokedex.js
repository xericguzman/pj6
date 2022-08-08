import React from "react";

export default function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={pokemon}>{p}</div>
      ))}
    </div>
  );
}
