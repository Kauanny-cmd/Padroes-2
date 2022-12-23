import { Pessoa } from './pessoa'
import { Correr, Musculacao } from './exercicioFavorito'
/* testando o código, chegaremos ao resultado. */
const Carlos = new Pessoa('Diogo', new Correr())
Carlos.exercitar() // Diogo decidiu: Correr
const Maria = new Pessoa('Maria', new Musculacao())
Maria.exercitar() //