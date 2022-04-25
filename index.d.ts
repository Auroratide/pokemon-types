export declare type PokemonType =
    'normal' |
    'fighting' |
    'flying' |
    'poison' |
    'ground' |
    'rock' |
    'bug' |
    'ghost' |
    'steel' |
    'fire' |
    'water' |
    'grass' |
    'electric' |
    'psychic' |
    'ice' |
    'dragon' |
    'dark' |
    'fairy'

export declare type TypeMultipliers = { [type in PokemonType]: number }

export function defensiveMultipliers(types: PokemonType[]): TypeMultipliers
