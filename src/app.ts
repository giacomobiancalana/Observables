import { interval } from 'rxjs';
import { map, tap, throttleTime } from 'rxjs/operators';

const observable = interval(1000);
//      ^?
const observer = {
  next: function (el: any) { console.log("value", el) }
};

observable.pipe(
  map(function (val) {
    return "t: " + val;
  }),
  throttleTime(2100),
).subscribe(observer);

/*
oppure
observable.subscribe((value) => console.log("value:", value));

oppure
observable.subscribe({
  next: (value) => console.log("value:", value)
});
*/
