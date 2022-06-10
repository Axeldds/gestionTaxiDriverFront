import { Chauffeur } from "./chauffeur";
import { Client } from "./client";

export class Avis {
    idAvis!:number;
    titre!:string;
    note!:number;
    commentaire!:string;
    clients!:Client[];
    chauffeurs!:Chauffeur[];
}
