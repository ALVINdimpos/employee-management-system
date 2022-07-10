import React from "react";
import "./Dashboard.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useNavigate } from "react";

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
  const [tasks, setPosts] = useState([]);
  const [postsEdit, setPostsEdit] = useState("");
  const [input, setInput] = useState([]);
  const [select, setSelect] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const apiEndPoint = "http://localhost:4000/tasks";
  const getPosts = async () => {
    const { data: res } = await axios.get(apiEndPoint);
    setPosts(res);
    console.log(res);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const addPost = async (e) => {
    const post = { taskName: input, IsCompleted: select };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...tasks]);
    e.preventDefault();
  };

  const handleUpdate = async (post) => {
    setOpen(true);

    // console.log(post);
    // await axios.put(apiEndPoint + "/" + post.id);
    // const postsClone = [...posts];
    // const index = postsClone.indexOf(post);
    // postsClone[index] = { ...post };
    setPostsEdit(post.name);
    console.log(postsEdit);
  };

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post);
    setPosts(tasks.filter((p) => p.id !== post));
  };

  // if (posts.length = 0) return <h2> there are no post in the Database </h2>;
  function inputHandler(e) {
    setInput(e.target.value);
  }
  function selectHandler(e) {
    setSelect(e.target.value);
    console.log(select);
  }
const handleOpenModal=()=>{
    setOpenModal(!openModal)
}

  return (
    <div>
      <NavBar></NavBar>

      <div className="containerA">
        <h2> There are {tasks.length} Task in the Database </h2>
        <button type="submit" onClick={handleOpenModal} className={openModal? "btn btn-danger":"btn btn-primary"}>
          {openModal?"CLOSE":"ADD"}
        </button>
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
    {openModal &&
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Add Task</h3>
              <div className="form-group mt-3">
                <label>Enter Task</label>
                <input
                  onChange={inputHandler}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Task"
                />
              </div>
              <div className="form-group mt-3">
                <label>IsCompleted</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={selectHandler}
                >
                  <option selected>Open this select menu</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={addPost}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
    }

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>taskName</th>
              <th>IsCompleted</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((post, idx) => (
              <tr key={idx}>
                <td> {post.id} </td>
                <td> {post.taskName} </td>
                <td> {post.IsCompleted} </td>

                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="btn btn-info btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
