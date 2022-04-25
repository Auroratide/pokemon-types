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

test.run()