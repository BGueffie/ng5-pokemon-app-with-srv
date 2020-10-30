export interface Pokemon {
    _id?: string;
    pokemonId: number,
    name: string,
    hp: number,
    cp: number,
    picture: string,
    types: [String]
}