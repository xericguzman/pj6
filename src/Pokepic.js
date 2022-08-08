import React from "react";

function Pokepic() {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={pokemon}>{p}</div>
      ))}
    </div>
  );
}

export default Pokepic;
