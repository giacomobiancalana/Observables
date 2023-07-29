import { interval } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

let observable = interval(1000);
let observer = {
  next: function(el: any) { console.log("value", el) }
};

observable.pipe(
map(function(val) {
  return "t: " + val;
}),
throttleTime(2100)
).subscribe(observer);

/*
oppure
observable.subscribe((value) => console.log("value:", value));

oppure
observable.subscribe({
  next: (value) => console.log("value:", value)
});
*/
