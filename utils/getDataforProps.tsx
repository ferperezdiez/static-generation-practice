import { pokeApi } from '../pages/api'

export const getDataForProps = async (name: string) => {
    
    const  { data }  = await pokeApi.get(`/pokemon/${name}`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}