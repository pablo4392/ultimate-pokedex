import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/"

class Services {
    static allPokemon(limit, offset) {
        const allPokes = axios({
            method: 'GET',
            url: `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
        })
        return allPokes
    }

    static typesPokemon(typeSelected) {
        const pokemonTypes = axios({
            method: 'GET',
            url: `${baseUrl}type/${typeSelected}`
        })
        return pokemonTypes
    }

    static pokemonTypes() {
        const typesPromise = axios({
            method: 'GET',
            url: `${baseUrl}type`
        })
        return typesPromise
    }
}

export default Services