import { of, timer, Observable, forkJoin } from 'rxjs';

// forkJoin icinde observable bitmis olmasi gerekmekte

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000),
});
observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('This is how it ends!'),
});