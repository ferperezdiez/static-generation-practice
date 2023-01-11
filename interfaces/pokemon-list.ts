
export interface Result {
    name: string,
    url: string
}

export interface PokeResult {
    count: number,
    next?: string,
    previus?: string,
    results: Result[],
}

export interface Data {
    pokemones: PokeResult
}