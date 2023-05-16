// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Image from "react-bootstrap/Image";
// import axios from "axios";

// function Delete(props) {
//   const handleSubmit = async (movieData) => {
//     movieData.preventDefault();

//     const serverUrl = `${process.env.REACT_APP_SERVER_URL}/getMovies/${props.movieData.id}`;
//     console.log("sssssss");
//     const axiosRes = await axios.delete(serverUrl);
//     console.log(axiosRes);

//     props.handleClose();
//   };

//   return (
//     <>
//       <Modal show={props.showFlag} onHide={props.handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{props.movieData.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Image
//             src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
//             rounded
//             width="100%"
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Delete it
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </>
//   );
// }
// export default Delete;
