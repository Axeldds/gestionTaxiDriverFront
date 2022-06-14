import { Agence } from "./agence";
import { Taxi } from "./taxi";
import { Utilisateur } from "./utilisateur";

export class Chauffeur {
    idChauffeur!:number;
    nomChauffeur!:string;
    prenomChauffeur!:string;
    age!:number;
    taxi!:Taxi;
    agence!:Agence;
}
