import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const sendReq = async () => {
    const url = `https://onlineserver-w9zu.onrender.com/getMovies`;
    const result = await axios.get(url);
    console.log(result.data);
    setMoviesData(result.data);
  };

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <h1>Fav List</h1>
      <Row xs={1} md={4} className="g-4">
        {moviesData.map((item, i) => (
          <Col key={i}>
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <p>{item.release_date}</p>
                  <p>{item.overview}</p>
                </Card.Text>
                <Button variant="primary">Add to my Favorites movies</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Home;
