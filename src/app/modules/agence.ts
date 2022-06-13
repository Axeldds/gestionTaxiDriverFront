import { Reclamation } from "./reclamation";
import { ResponsableAgence } from "./responsable-agence";

export class Agence {
    idAgence!:number;
    nomAgence!:string;
    adresse!:string;
    chiffreAffaire!:number;
    resp!:ResponsableAgence;
    reclamations!:Reclamation[];
}