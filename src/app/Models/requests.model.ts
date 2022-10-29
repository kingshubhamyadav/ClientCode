//model to get the list of unassigned wash orders
export class Requests{
    orderId! : number;
    customerId!:number;
    firstName! : string;
    lastName! : string;
    email!:string;
    timeOfWash : string = '';
    dateOfWash : string = '';
    location : string = '';
    category : string = '';
}