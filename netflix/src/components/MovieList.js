import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

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
      <h1>Netflix  List</h1>
      <Movie mData={movList} /> 
      {/* <Row xs={1} md={4} className="g-4">
        {props.mData.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.poster_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <p>{item.overview}</p>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleshow(item);
                  }}
                >
                  More
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    handleupdate(item);
                  }}
                >
                  Update
                </Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <UpdateModal
        showFlag={showUpdate}
        handleclose={handleclose}
        item={clickedMeme}
        takeNewArrFromChild={takeNewArrFromChild} */}
      {/* />  */}
    </>
  );
}
export default MovieList;
