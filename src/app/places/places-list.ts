export interface PlacesList {
    id:number;
    name:string;
    type:string;
    tiketprice:number;
    image?:string;
    rate:number;
    description:string;
    reviews:Array<string>;
}
