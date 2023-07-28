import { Observable } from 'rxjs';
import { interval } from 'rxjs';

//TODO: vuoi provare a pubblicarlo??

console.log("uuu");

interval(1000).subscribe((uu) => console.log(uu));

//TODO: da capire perchè non posso fare Observables.interval e come si importa per bene interval