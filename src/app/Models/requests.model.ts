//model to get the list of unassigned wash orders
export class Requests{
    orderId! : number;
    firstName! : string;
    lastName! : string;
    timeOfWash : string = '';
    dateOfWash : string = '';
    location : string = '';
    category : string = '';
}