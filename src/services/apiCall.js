import axios from "axios";

export const bringCharacters = async () => {
  try {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const bringMovies = async () => {
  try {
    let res = await axios.get("http://localhost:3005/movie/");
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
