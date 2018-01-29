import { Nuovofile } from "./nuovofile";

export class ListService{

getNuovofile(): Nuovofile[]{
let items: Nuovofile[] = [];
items.push(new Nuovofile("","",0));
items.push(new Nuovofile("esatto"));
items.push(new Nuovofile("maina","gioia")); 
return items;
}
}