export async function fetchDataFromAPI(url) {
  const response = await fetch(url);
  if (!response) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchAnimes() {
  const url = "https://api.jikan.moe/v4/anime";
  return await fetchDataFromAPI(url);
}

export async function fetchMangas() {
  const url = "https://api.jikan.moe/v4/manga";
  return await fetchDataFromAPI(url);
}

export async function fetchTopAnimes() {
  const url = "https://api.jikan.moe/v4/top/anime";
  return await fetchDataFromAPI(url);
}

export async function fetchTopMangas() {
  const url = "https://api.jikan.moe/v4/top/manga";
  return await fetchDataFromAPI(url);
}

export async function fetchTopCharas() {
  const url = "https://api.jikan.moe/v4/top/characters";
  return await fetchDataFromAPI(url);
}

export async function fetchRandomAnime() {
  const url = "https://api.jikan.moe/v4/random/anime";
  return await fetchDataFromAPI(url);
}

export async function fetchRandomManga() {
  const url = "https://api.jikan.moe/v4/random/manga";
  return await fetchDataFromAPI(url);
}
