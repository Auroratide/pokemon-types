# Pokemon Types

A very simple pokemon types calculator. What's nice is this lets you see the vulnerabilities and resistances of hypothetical pokemon with three or more types.

```js
import { defensiveMultipliers } from '@auroratide/pokemon-types'

defensiveMultipliers(['fire'])
defensiveMultipliers(['normal', 'ghost'])
defensiveMultipliers(['flying', 'rock', 'bug'])
```

This gives back a map of types to the respective damage multipler.

```js
const result = {
    normal: 1,
    fighting: 2,
    flying: 0.5,
    // ...
}
```
