import { useState, useEffect } from 'react';
import pokemonService, { IListPokemon } from '../../services/PokemonService';

const Home = () => {
  import('./styles.css');

  const [pokemons, setPokemons] = useState<IListPokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    pokemonService.getPokemons().then((data) => {
      setPokemons(data)
    });
  }, [])

  return (
    <>
      <h1>Pokémon Unite - Pokédex</h1>
      <h2>Confira a lista completa de Pokémons do jogo Pokemón Unite e suas habilidades, evoluções e muito mais!</h2>
      <div className="search__container">
        <input className="search__field" placeholder="Pesquisar Pokémon" onChange={({ target }) => setSearch(target.value)} />
        <button className="search__button" onClick={() => setPokemons(pokemonService.searchPokemon(search))}>Buscar</button>
        <button className="search__button--mobile" onClick={() => setPokemons(pokemonService.searchPokemon(search))}>
          <img src='/assets/images/search.svg' />
        </button>

      </div>
      <div className="card__container">
        {
          pokemons.map((item) => {
            return (
              <a key={item.id} className="card" style={{ background: item.color }} href={`/${item.uri}`}>
                <img className="card__image" src={`/assets/images/stat/stat-${item.avatar}.png`} />
                <div className="card__title">{item.name}</div>;
              </a>
            )
          }
          )}
      </div>
    </>
  );
}

export default Home