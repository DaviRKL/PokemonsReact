import axios from "axios";

class PokemonService {

  public async getPokemons() {

      const response = await axios.get("https://6283929f92a6a5e462260498.mockapi.io/pokemons");
      return response.data;

  }

}

const pokemonService = new PokemonService();
export default pokemonService;