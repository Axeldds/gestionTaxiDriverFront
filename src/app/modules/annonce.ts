import { Reservation } from "./reservation";
import { ResponsableAgence } from "./responsable-agence";

export class Annonce {
    idAnnonce!:number;
    dateAnnonce!:Date;
    reduction!:number;
    description!:string;
    code!:String;
    responsableAgence!:ResponsableAgence;
    reservations!:Reservation[];
}
