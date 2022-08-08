import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Pokedex from "./Pokedex";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageURL(res.data.next);
        setPreviousPageURL(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageURL]);

  function goToNextPage() {
    setCurrentPageURL(nextPageURL);
  }
  function goToPreviousPage() {
    setCurrentPageURL(previousPageURL);
  }

  if (loading) return "Loading...";

  return (
    <>
      <div className="poke-container">
        <h1>Pokemon, in card order, every generation</h1>
        <div className="poke-list">
          <Pokedex pokemon={pokemon} />
        </div>
        <div className="pagination-buttons">
          <Pagination
            goToPreviousPage={previousPageURL ? goToPreviousPage : null}
          />
          <Pagination goToNextPage={nextPageURL ? goToNextPage : null} />
        </div>
      </div>
    </>
  );
}

export default App;
