import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import axios from "axios";
import React, { useState } from "react";

function ModalMovie(props) {
  const { showFlag, handleClose, movieData } = props;
  const [Opinion, setOpinion] = useState("");
  const handleSubmit = async () => {
    try {
      const serverUrl = `https://onlineserver-w9zu.onrender.com/getMovies`;
      const data = {
        id: movieData.id,
        title: movieData.title,
        release_date: movieData.release_date,
        poster_path: movieData.poster_path,
        overview: movieData.overview,
      };
      axios.post(serverUrl, data).then((res) => {
        console.log(res);
      });

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={showFlag} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
            rounded
            width="100%"
          />
          <div>
            <label htmlFor="op"> add a comment </label>
            <br></br>
            <input
              placeholder="your comment"
              type="text"
              value={Opinion}
              size="40"
              onChange={(event) => setOpinion(event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
