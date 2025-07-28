import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  switchMap,
  tap,
  merge,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <input type="text" id="search">
  <div id="results"></div>
  <div id="loading" style="display: none;">Loading...</div>
`;

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const searchElement = document.getElementById('search') as HTMLInputElement;
const resultsElement = document.getElementById('results')!;
const loadingElement = document.getElementById('loading')!;

const updateUrlParams = (query: string) => {
  const url = new URL(window.location.href);
  if (query) {
    url.searchParams.set('search', query);
  } else {
    url.searchParams.delete('search');
  }
  window.history.replaceState({}, '', url.toString());
};

const getSearchParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('search') || '';
};

const searchPosts = (query: string) =>
  ajax
    .getJSON<Post[]>(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
    .pipe(
      catchError(() => {
        console.error('Error fetching posts');
        return of<Post[]>([]);
      })
    );

const inputChange$ = fromEvent<InputEvent>(searchElement, 'input').pipe(
  map(({ target }) => (target as HTMLInputElement).value.trim())
);

const popState$ = fromEvent(window, 'popstate').pipe(
  map(() => getSearchParam())
);

const searchQuery$ = merge(of(getSearchParam()), inputChange$, popState$).pipe(
  distinctUntilChanged(),
  tap((query) => {
    if (searchElement.value !== query) {
      searchElement.value = query;
    }
    updateUrlParams(query);
    loadingElement.style.display = 'block';
  })
);

searchQuery$
  .pipe(
    debounceTime(300),
    switchMap((query) => (query ? searchPosts(query) : of([])))
  )
  .subscribe({
    next: (posts) => {
      resultsElement.innerHTML = posts
        .slice(0, 5)
        .map((p) => `<p>${p.title}</p>`)
        .join('');

      loadingElement.style.display = 'none';
    },
    error: () => {
      resultsElement.innerHTML = '<p>Error fetching posts</p>';
      loadingElement.style.display = 'none';
    },
  });
