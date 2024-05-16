const apiUrl = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(apiUrl + path, {
     method:  'GET',
     headers: {
       Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjhjMGVkNTllMjYxYjllNDliYzFiYWQ0NjQzYzMzZiIsInN1YiI6IjY2MTcyNjA1NDUzOWQwMDE2NGZiY2VhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vlGW5VGK4cCxr71Q56aNklDaPeMyc_FZdRfXuZb3FFk",
       'Content-Type': 'application/json'
     }
  }).then((result) => result.json());
}