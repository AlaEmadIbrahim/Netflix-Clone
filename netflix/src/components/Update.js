// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import axios from "axios";

// function UpdateModal(props) {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const obj = {
//       id: e.target.id.value,
//       title: e.target.title.value,
//       release_date: e.target.release_date.value,
//       poster_path: e.target.poster_path.value,
//       overview: e.target.overview.value,
//     };
//     const serverURL = `${process.env.REACT_APP_SERVER_URL}getMovies/${props.item.id}`;
//     const axiosRes = await axios.put(serverURL, obj);
//     // console.log("data from server", axiosRes);
//     props.handleclose();
//     props.takeNewArrFromChild(axiosRes.data);
//   };
//   return (
//     <>
//       <Modal show={props.showFlag} onHide={props.handleclose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group>
//               <Form.Label>ID</Form.Label>
//               <Form.Control
//                 name="name"
//                 type="id"
//                 defaultValue={props.item.id}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 name="image"
//                 type="title"
//                 defaultValue={props.item.title}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>release_date</Form.Label>
//               <InputGroup hasValidation>
//                 <Form.Control
//                   type="text"
//                   name="release_date"
//                   defaultValue={props.item.release_date}
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>poster_path</Form.Label>
//               <InputGroup hasValidation>
//                 <Form.Control
//                   type="text"
//                   name="poster_path"
//                   defaultValue={props.item.poster_path}
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>overview</Form.Label>
//               <InputGroup hasValidation>
//                 <Form.Control
//                   type="text"
//                   name="overview"
//                   defaultValue={props.item.overview}
//                 />
//               </InputGroup>
//             </Form.Group>
//             <Button type="submit">Submit</Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleclose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default UpdateModal;
