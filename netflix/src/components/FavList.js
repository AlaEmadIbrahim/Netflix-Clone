import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
function FavList() {
  const [moviesData, setMoviesData] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getMovies`;
    const result = await axios.get(serverUrl);
    console.log(result.data);
    setMoviesData(result.data);
  };
  const takeNewArr = (newarr) => {
    setMoviesData(newarr);
  };
  useEffect(() => {
    sendReq();
  }, []);
  return (
    <>
      <h1>Favarite Movies</h1>
      <Movie favData={moviesData} takeNewArr={takeNewArr} />
    </>
  );
}
export default FavList;
