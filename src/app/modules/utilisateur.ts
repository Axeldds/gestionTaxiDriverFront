import { Client } from "./client";
import { ResponsableAgence } from "./responsable-agence";

export class Utilisateur {
    idUtilisateur!:number;
    username!:string;
    password!:string;
    clients!:Client[];
    responsables!:ResponsableAgence[];
}
