


const toggleFavorites = ( id: number) => {

    if(typeof window === 'undefined') return false
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if(favorites.includes(id)){
        favorites = favorites.filter((idPokemon: number) => idPokemon !== id)
    } else {
        favorites.push(id)
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existFavorite = (id: number): boolean => {
    if(typeof window === 'undefined') return false
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
}

const favoritesList = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toggleFavorites,
    existFavorite,
    favoritesList
};