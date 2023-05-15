import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";

function MovieList() {
  const [movList, setmoList] = useState([]);
  const sendReq = async () => {
    const url = `https://onlineserver-w9zu.onrender.com/trending`;
    const result = await axios.get(url);
    setmoList(result.data);
  };

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <h1>Netflix Movies List</h1>
      <Movie mData={movList} />
    </>
  );
}
export default MovieList;
