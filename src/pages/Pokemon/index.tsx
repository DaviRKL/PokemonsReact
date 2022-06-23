import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pokemonService, { IPokemon } from '../../services/PokemonService';
const hashLevel: { [key in number]: string } = {
  1: 'Iniciante',
  2: 'Intermediário',
  3: 'Expert'
}

const Pokemon = () => {
  import('./styles.css');

  const { uri } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    pokemonService.getPokemon(uri).then((data: any) => {
      setPokemon(data)
    });
  }, [])

  if (!pokemon) {
    return null;
  }

  const setColor = (newColor: string) => {
    document.documentElement.style.setProperty('--pokemon-color', newColor);
  }

  setColor(pokemon.color)
  const { skills } = pokemon;

  return (
    <>
      <section className="preview__container">
        <div className="preview__pokemon">
          <img src={`/assets/images/stat/stat-${pokemon.avatar}.png`} alt="Charizard" className="preview__image" />
        </div>
        <div className="preview__details">
          <h1 className="pokemon__color">{pokemon.name}</h1>
          <p className="preview__level">Nível: {hashLevel[pokemon.level]}</p>
          <p className="preview__description">
            {pokemon.description}
          </p>
          <div className="preview__pills">
            {pokemon.stats_battle.map((stats) => <span key={stats} className="preview__pill">{stats}</span>)}
          </div>
        </div>
      </section>
      <section className="skills__container">
        <h2 className="skills__title pokemon__color">
          Skills do Pokémon
        </h2>
        <p className="skills__description">
          Esse Pokémon possui as seguintes habilidades de batalha:
        </p>
        <div className="skills__list">
          <div className="skills__item">
            <label className="skills__label pokemon__color">Ataque</label>
            <progress className="skills__progress pokemon__color" max="100" value={skills.attack}></progress>
          </div>
          <div className="skills__item">
            <label className="skills__label pokemon__color">Resistência</label>
            <progress className="skills__progress pokemon__color" max="100" value="30"></progress>
          </div>
          <div className="skills__item">
            <label className="skills__label pokemon__color">Mobilidade</label>
            <progress className="skills__progress pokemon__color" max="100" value="70"></progress>
          </div>
          <div className="skills__item">
            <label className="skills__label pokemon__color">Pontuação</label>
            <progress className="skills__progress pokemon__color" max="100" value="20"></progress>
          </div>
          <div className="skills__item">
            <label className="skills__label pokemon__color">Apoio</label>
            <progress className="skills__progress pokemon__color" max="100" value="80"></progress>
          </div>
        </div>
      </section>
      {!!pokemon.evolutions.length &&
      <section className="evolutions__container">
        <h2 className="pokemon__color">Evoluções</h2>
        <p className="evolutions__description">Esse Pokémon pode evoluir em:</p>
        <div className="evolutions__list">
            {
              pokemon.evolutions.map((evolution) => {
                return (
                  <div key={evolution.id} className="evolutions__item">
                    <img src={`/assets/images/evolution/${evolution.avatar}`} alt={evolution.name} className="evolutions__image" />
                    <div className="evolutions__details">
                      <p className="evolutions__name pokemon__color">{evolution.name}</p>
                      <p className="evolutions__level">Nível {evolution.level}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
      </section>
      }
    </>
  )
}

export default Pokemon