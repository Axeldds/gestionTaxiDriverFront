import { Agence } from "./agence";
import { Taxi } from "./taxi";

export class Chauffeur {
    idChauffeur!:number;
    nomChauffeur!:string;
    prenomChauffeur!:string;
    age!:number;
    taxi!:Taxi;
    agence!: Agence;
}
