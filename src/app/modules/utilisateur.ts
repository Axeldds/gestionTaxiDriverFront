import { Client } from "./client";

export class Utilisateur {
    idUtilisateur!:number;
    username!:string;
    password!:string;
    clients!:Client[];
}
