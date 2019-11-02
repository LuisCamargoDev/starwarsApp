export async function StarWarsPlanets () {
    const urls = [
        "https://swapi.co/api/planets/?page=1",
        "https://swapi.co/api/planets/?page=2",
        "https://swapi.co/api/planets/?page=3",
        "https://swapi.co/api/planets/?page=4",
        "https://swapi.co/api/planets/?page=5",
        "https://swapi.co/api/planets/?page=6",
        "https://swapi.co/api/planets/?page=7"
    ];
    let page = Math.floor(Math.random() * urls.length)
    const response = await fetch(urls[page])
    const data = await(response.json())
    return data
  }