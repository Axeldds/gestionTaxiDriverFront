import { Annonce } from "./annonce";
import { Client } from "./client";
import { Trajet } from "./trajet";

export class Reservation {
    idReservation!:number;
    dateDebut!:Date;
    dateFin!:Date;
    prix!:number;
    client!:Client;
    trajets!:Trajet[];
    annonce!:Annonce;
}
