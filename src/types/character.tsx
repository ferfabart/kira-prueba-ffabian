import { Planet } from "./planet";

export interface Character{
    created:string,
    episode:string[],
    gender:string,
    id:number,
    image:string,
    name:string,
    species:string,
    status:string,
    type:string,
    url:string,
    origin:Planet
    location:Planet,
    favorite:boolean
}