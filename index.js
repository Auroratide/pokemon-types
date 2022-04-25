const vulnerable = 2
const neutral = 1
const resistant = 0.5
const immune = 0

const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

const withNeutral = (allMultipliers) =>
    Object.entries(allMultipliers).reduce((multipliersWithNeutral, [defendingType, typeMultipliers]) => ({
        ...multipliersWithNeutral,
        [defendingType]: types.reduce((multipliers, attackingType) => ({
            ...multipliers,
            [attackingType]: typeMultipliers[attackingType] ?? neutral,
        }), {})
    }), {})

const singleDefensiveMultiplers = withNeutral({
    normal: {
        fighting: vulnerable,
        ghost: immune,
    },
    fighting: {
        fairy: vulnerable,
        flying: vulnerable,
        psychic: vulnerable,
        bug: resistant,
        rock: resistant,
        dark: resistant,
    },
    flying: {
        electric: vulnerable,
        ice: vulnerable,
        rock: vulnerable,
        bug: resistant,
        fighting: resistant,
        grass: resistant,
        ground: immune,
    },
    poison: {
        ground: vulnerable,
        psychic: vulnerable,
        fighting: resistant,
        poison: resistant,
        bug: resistant,
        grass: resistant,
        fairy: resistant,
    },
    ground: {
        grass: vulnerable,
        ice: vulnerable,
        water: vulnerable,
        poison: resistant,
        rock: resistant,
        electric: immune,
    },
    rock: {
        fighting: vulnerable,
        grass: vulnerable,
        ground: vulnerable,
        steel: vulnerable,
        water: vulnerable,
        fire: resistant,
        flying: resistant,
        normal: resistant,
        poison: resistant,
    },
    bug: {
        fire: vulnerable,
        flying: vulnerable,
        rock: vulnerable,
        fighting: resistant,
        grass: resistant,
        ground: resistant,
    },
    ghost: {
        ghost: vulnerable,
        dark: vulnerable,
        bug: resistant,
        poison: resistant,
        normal: immune,
        fighting: immune,
    },
    steel: {
        fire: vulnerable,
        fighting: vulnerable,
        ground: vulnerable,
        bug: resistant,
        dragon: resistant,
        fairy: resistant,
        flying: resistant,
        grass: resistant,
        ice: resistant,
        normal: resistant,
        psychic: resistant,
        rock: resistant,
        steel: resistant,
        poison: immune,
    },
    fire: {
        ground: vulnerable,
        rock: vulnerable,
        water: vulnerable,
        bug: resistant,
        fairy: resistant,
        fire: resistant,
        grass: resistant,
        ice: resistant,
        steel: resistant,
    },
    water: {
        electric: vulnerable,
        grass: vulnerable,
        fire: resistant,
        ice: resistant,
        steel: resistant,
        water: resistant,
    },
    grass: {
        bug: vulnerable,
        fire: vulnerable,
        flying: vulnerable,
        ice: vulnerable,
        poison: vulnerable,
        electric: resistant,
        grass: resistant,
        ground: resistant,
        water: resistant,
    },
    electric: {
        ground: vulnerable,
        electric: resistant,
        flying: resistant,
        steel: resistant,
    },
    psychic: {
        bug: vulnerable,
        ghost: vulnerable,
        dark: vulnerable,
        fighting: resistant,
        psychic: resistant,
    },
    ice: {
        fighting: vulnerable,
        fire: vulnerable,
        rock: vulnerable,
        steel: vulnerable,
        ice: resistant,
    },
    dragon: {
        dragon: vulnerable,
        fairy: vulnerable,
        ice: vulnerable,
        electric: resistant,
        fire: resistant,
        grass: resistant,
        water: resistant,
    },
    dark: {
        bug: vulnerable,
        fairy: vulnerable,
        fighting: vulnerable,
        dark: resistant,
        ghost: resistant,
        psychic: immune,
    },
    fairy: {
        poison: vulnerable,
        steel: vulnerable,
        bug: resistant,
        dark: resistant,
        fighting: resistant,
        dragon: immune,
    },
})

const combine = (type1, type2) => Object.entries(type1).reduce((combined, [attackingType, multiplier]) => ({
    ...combined,
    [attackingType]: multiplier * type2[attackingType],
}), {})

export const defensiveMultipliers = (types) => types
    .map(type => singleDefensiveMultiplers[type])
    .reduce(combine)
