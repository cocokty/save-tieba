import { writeFileSync } from 'fs'
import { parseTiezi } from '../source'




parseTiezi(2369455464)
    .then($ => { writeFileSync(`${__dirname}/5544838611.md`, $) })
