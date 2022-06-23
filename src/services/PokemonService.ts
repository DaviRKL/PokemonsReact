import axios from "axios";

export interface IListPokemon {
  id: number;
  name: string;
  color: string;
  avatar: string;
  uri: string;
}

interface IEvolution {
  id: number,
  name: string,
  avatar: string,
  level: number
}

export interface IPokemon {
  id: number,
  name: string,
  avatar: string,
  description: string
  level: number,
  stats_battle: string[],
  color: string,
  uri: string,
  skills: {
    attack: number
    resistance: number
    mobility: number
    punctuation: number
    support: number
  }
  evolutions: IEvolution[]
}

class PokemonService {
  private axios;
  private listPokemons: IListPokemon[] = [];

  public constructor() {
    this.axios = axios.create({
      baseURL: "https://6283929f92a6a5e462260498.mockapi.io",
      timeout: 1000,
    });
  }

  public async getPokemons() {
    if (this.listPokemons.length) {
      return this.listPokemons;
    }

    try {
      const response = await this.axios.get("/pokemons");
      this.listPokemons = response.data;

      return this.listPokemons
    } catch (error) {
      return [];
    }
  }

  public async getPokemon(uri?: string): Promise<IPokemon | null> {
    try {
      const response = await this.axios.get(`/pokemon/${uri}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }
  
  public searchPokemon(search: string) {
    return this.listPokemons.filter((item) => (item?.name).toUpperCase().includes(search.toUpperCase()));
  }

}

const pokemonService = new PokemonService();
export default pokemonService;