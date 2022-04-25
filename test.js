import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { defensiveMultipliers } from './index.js'

const vulnerable = 2
const neutral = 1
const resistant = 0.5
const immune = 0

test('single types', () => {
    assert.equal(defensiveMultipliers(['normal']), {
        normal: neutral,
        fighting: vulnerable,
        flying: neutral,
        poison: neutral,
        ground: neutral,
        rock: neutral,
        bug: neutral,
        ghost: immune,
        steel: neutral,
        fire: neutral,
        water: neutral,
        grass: neutral,
        electric: neutral,
        psychic: neutral,
        ice: neutral,
        dragon: neutral,
        dark: neutral,
        fairy: neutral,
    })

    assert.equal(defensiveMultipliers(['flying']), {
        normal: neutral,
        fighting: resistant,
        flying: neutral,
        poison: neutral,
        ground: immune,
        rock: vulnerable,
        bug: resistant,
        ghost: neutral,
        steel: neutral,
        fire: neutral,
        water: neutral,
        grass: resistant,
        electric: vulnerable,
        psychic: neutral,
        ice: vulnerable,
        dragon: neutral,
        dark: neutral,
        fairy: neutral,
    })
})

test('dual types', () => {
    assert.equal(defensiveMultipliers(['normal', 'psychic']), {
        normal: neutral,
        fighting: neutral,
        flying: neutral,
        poison: neutral,
        ground: neutral,
        rock: neutral,
        bug: vulnerable,
        ghost: immune,
        steel: neutral,
        fire: neutral,
        water: neutral,
        grass: neutral,
        electric: neutral,
        psychic: resistant,
        ice: neutral,
        dragon: neutral,
        dark: vulnerable,
        fairy: neutral,
    })

    assert.equal(defensiveMultipliers(['flying', 'fire']), {
        normal: neutral,
        fighting: resistant,
        flying: neutral,
        poison: neutral,
        ground: immune,
        rock: vulnerable * vulnerable,
        bug: resistant * resistant,
        ghost: neutral,
        steel: resistant,
        fire: resistant,
        water: vulnerable,
        grass: resistant * resistant,
        electric: vulnerable,
        psychic: neutral,
        ice: neutral,
        dragon: neutral,
        dark: neutral,
        fairy: resistant,
    })
})

test('many types', () => {
    assert.equal(defensiveMultipliers(['flying', 'fire', 'bug']), {
        normal: neutral,
        fighting: resistant * resistant,
        flying: vulnerable,
        poison: neutral,
        ground: immune,
        rock: vulnerable * vulnerable * vulnerable,
        bug: resistant * resistant,
        ghost: neutral,
        steel: resistant,
        fire: neutral,
        water: vulnerable,
        grass: resistant * resistant * resistant,
        electric: vulnerable,
        psychic: neutral,
        ice: neutral,
        dragon: neutral,
        dark: neutral,
        fairy: resistant,
    })
})

test.run()