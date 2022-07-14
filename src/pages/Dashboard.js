import React from "react";
import "./Dashboard.css";
import Signout from "../components/Signout";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SignUp from "../components/SignUp";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { CSVLink, CSVDownload } from "react-csv";

import autoTable from "jspdf-autotable";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Dashboard() {
  const doc = new jsPDF();
  const arry = [];
  function pdfhandler() {
    autoTable(doc, { html: "#my-table" });
    doc.save("table.pdf");
  }

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];


  const [posts, setPosts] = useState([]);
  const [postsEdit, setPostsEdit] = useState("");
  const [downloadData, setDownloadData] = useState([]);

  const [input, setInput] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showModal, setShowModal] = useState(false);
  const apiEndPoint = "http://localhost:4000/user";

  const getPosts = async (e) => {
    const { data: res } = await axios.get(apiEndPoint);
    setPosts(res);
    if (e) {
       apiEndPoint += `&q=${e}`
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const addPost = async (e) => {
    const post = { name: input, body: "new" };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
    e.preventDefault();
  };

  const handleUpdate = async (post) => {
    setOpen(true);

    setPostsEdit(post.filter());
    console.log(postsEdit);
  };

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post);
    setPosts(posts.filter((p) => p.id !== post));
  };
  const handleDownloadSignleFile = (post) => {
    arry.push(downloadData);
    console.log(post);
    setDownloadData(post);
    pdfhandler();
  };

  const searchandler = (e) => {
 const search =posts.filter((single)=>{
   
      return single.userName.includes(e.target.value.trim())
   
 })
if(search.length>0) setPosts(search)
if(e.target.value.length===0) window.location.reload()
  };
  return (
    <div>
     <Signout></Signout>
     <h1></h1>
      <div className="containerA">
        <h2> There are {posts.length} Employee in the Database </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div  className="button">
        <button onClick={handleShowModal} className="btn btn-info btn-sm">
          Add
        </button>
        <button
          class="btn btn-info btn-sm"
          onClick={() => handleDownloadSignleFile()}
        >
          PDF
        </button>
        <CSVLink data={csvData} class="btn btn-info btn-sm">CSV</CSVLink>
        <input onChange={searchandler} placeholder="Search" className="input"></input>
       
        
        </div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Update your Todo
            </Typography>

            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              Value={postsEdit}
              variant="filled"
            />
          </Box>
        </Modal>
        {showModal ? <SignUp /> : ""}
        <table className="table" id="my-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Postion</th>
              <th>Task</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, idx) => (
              <tr key={idx}>
                <td> {post.id} </td>
                <td> {post.userName} </td>
                <td> {post.Email} </td>
                <td> {post.Postion} </td>
                <td> {post.Tasks} </td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    class="btn btn-primary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post.id)}
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
