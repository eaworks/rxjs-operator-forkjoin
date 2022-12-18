import { of, timer, Observable, forkJoin } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

// forkJoin icinde observable bitmis olmasi gerekmekte

// const observable = forkJoin({
//   foo: of(1, 2, 3, 4),
//   bar: Promise.resolve(8),
//   baz: timer(4000),
// });
// observable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('This is how it ends!'),
// });

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);
const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['first_name'])
// );
// randomNation$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['capital'])
// );
// randomFood$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['dish'])
// );
forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([randomName$, randomNation$, randomFood$]) =>
    console.log(
      `${randomNation$.response['capital']} da yasayan ${randomName$.response['first_name']} ${randomFood$.response['dish']} yemeyi cok sever
    `
    )
);
