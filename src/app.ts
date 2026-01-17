import { interval } from 'rxjs';
import { map, tap, throttleTime } from 'rxjs/operators';

let observable = interval(1000);
//   ^?
let observer = {
  next: function (el: any) { console.log("value", el) }
};

observable.pipe(
  map(function (val) {
    return "t: " + val;
  }),
  throttleTime(2100),
).subscribe(observer);
// ).subscribe(el => console.log("value", el));

/*
oppure
observable.subscribe((value) => console.log("value:", value));

oppure
observable.subscribe({
  next: (value) => console.log("value:", value)
});
*/
