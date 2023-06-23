import { redFavorita } from "./redFavorita";
import { tiempoRedes } from "./tiempoRedes";
import { timeProm } from "./timeProm";


export interface dataShow{
    nroEncuestas:number,
    redFavorita:redFavorita[],
    timeProm:timeProm,
    times:tiempoRedes[]
}