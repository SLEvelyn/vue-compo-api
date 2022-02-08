import axios from 'axios'
import {ref} from 'vue'

const usePokemon = (pokemonId = '1') => {



    const pokemon = ref(1)
    const isLoading = ref(false)
    const errorMessage = ref()


    const searchPokemon = async() => {

        isLoading.value = true
        pokemon.value = null

        try {
            
            const {data} = await axios.get(` https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            pokemon.value = data
            errorMessage.value = null

            console.log(data)


        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese pokemon'
        }

        isLoading.value = false

    }

    searchPokemon()

    return {
        pokemon,
        isLoading,
        errorMessage,
    }

}

export default usePokemon