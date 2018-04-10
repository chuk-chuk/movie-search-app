export function fetchMovies(query) {
  const url = `http://localhost:5000/movies/?searchTerm=${query}`

  return fetch(url)
    .then(response => {

      if(response.ok) {
        return response.json();
      } else {
        throw new Error("Response error");
      }
    })
    .catch(console.error);
}
